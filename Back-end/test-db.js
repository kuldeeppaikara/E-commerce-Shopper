require('dotenv').config();
const mongoose = require('mongoose');

// Test MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected successfully');
    
    // Test Product model
    const Product = mongoose.model('Product', {
      id: { type: Number, required: true, unique: true },
      name: { type: String, required: true },
      image: { type: String, required: true },
      category: { type: String, required: true },
      new_price: { type: Number, required: true },
      old_price: { type: Number, required: true },
      date: { type: Date, default: Date.now },
      available: { type: Boolean, default: true }
    });

    // Check if products exist
    Product.find({}).then(products => {
      console.log('📦 Products in database:', products.length);
      if (products.length > 0) {
        console.log('First product:', products[0]);
      }
      
      // List all collections
      mongoose.connection.db.listCollections().toArray((err, collections) => {
        if (err) {
          console.error('Error listing collections:', err);
        } else {
          console.log('📂 Available collections:', collections.map(c => c.name));
        }
        process.exit(0);
      });
    }).catch(err => {
      console.error('❌ Error fetching products:', err);
      process.exit(1);
    });
  })
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });
