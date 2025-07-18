# E-commerce Application

A full-stack e-commerce application built with React, Node.js, Express, and MongoDB.

## 🏗️ Architecture

- **Backend**: Node.js + Express.js REST API
- **Frontend**: React.js customer-facing store
- **Admin**: React.js admin dashboard
- **Database**: MongoDB Atlas
- **Authentication**: JWT tokens
- **File Storage**: Local file system

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas account

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd E-commerce
   ```

2. **Install dependencies**
   ```bash
   # Backend
   cd Back-end
   npm install
   
   # Frontend
   cd ../Front-end
   npm install
   
   # Admin
   cd ../Admin
   npm install
   ```

3. **Environment Configuration**
   
   Copy the environment files and update with your configuration:
   
   ```bash
   # Backend
   cp Back-end/.env.example Back-end/.env
   
   # Frontend
   cp Front-end/.env.example Front-end/.env
   
   # Admin
   cp Admin/.env.example Admin/.env
   ```

4. **Update Environment Variables**
   
   **Backend (.env):**
   ```env
   PORT=4000
   NODE_ENV=development
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CORS_ORIGIN=http://localhost:3000,http://localhost:5173
   ```
   
   **Frontend (.env):**
   ```env
   VITE_API_URL=http://localhost:4000
   VITE_APP_NAME=E-Commerce Store
   ```
   
   **Admin (.env):**
   ```env
   VITE_API_URL=http://localhost:4000
   VITE_APP_NAME=E-Commerce Admin
   ```

### Running the Application

#### Development Mode

```bash
# Terminal 1 - Backend
cd Back-end
npm run dev

# Terminal 2 - Frontend
cd Front-end
npm run dev

# Terminal 3 - Admin
cd Admin
npm run dev
```

#### Production Mode

```bash
# Backend
cd Back-end
npm start

# Frontend (build and serve)
cd Front-end
npm run build
npm run preview

# Admin (build and serve)
cd Admin
npm run build
npm run preview
```

## 🌐 Cloud Deployment

### Option 1: Railway (Recommended)

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and deploy**
   ```bash
   railway login
   railway link
   railway up
   ```

3. **Set environment variables in Railway dashboard**

### Option 2: Render

1. **Backend Deployment**
   - Create a new Web Service on Render
   - Connect your GitHub repository
   - Set build command: `npm install`
   - Set start command: `npm start`
   - Add environment variables

2. **Frontend/Admin Deployment**
   - Create a new Static Site on Render
   - Set build command: `npm install && npm run build`
   - Set publish directory: `dist`

### Option 3: Vercel (Frontend/Admin) + Railway (Backend)

1. **Deploy Backend to Railway** (see above)

2. **Deploy Frontend to Vercel**
   ```bash
   cd Front-end
   vercel --prod
   ```

3. **Deploy Admin to Vercel**
   ```bash
   cd Admin
   vercel --prod
   ```

### Option 4: Heroku

1. **Backend Deployment**
   ```bash
   cd Back-end
   heroku create your-app-name-backend
   git push heroku main
   ```

2. **Frontend/Admin Deployment**
   - Use Heroku buildpack for static sites
   - Or deploy to Netlify/Vercel

## 🔧 Configuration

### Backend Configuration

- **Database**: MongoDB Atlas connection string
- **JWT Secret**: Strong secret key for JWT tokens
- **CORS**: Configure allowed origins
- **File Upload**: Local storage (configurable to cloud)

### Frontend Configuration

- **API URL**: Backend service URL
- **Environment**: Development/Production settings

### Security Features

- **Rate Limiting**: API rate limiting implemented
- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **JWT Authentication**: Secure token-based auth
- **Input Validation**: Request validation using Joi

## 📊 API Endpoints

### Authentication
- `POST /register` - User registration
- `POST /login` - User login

### Products
- `GET /allproducts` - Get all products
- `POST /addproduct` - Add new product (Admin)
- `POST /deleteproduct` - Delete product (Admin)
- `GET /newcollections` - Get new collections
- `GET /popularinwomen` - Get popular women's products

### Cart
- `POST /addtocart` - Add item to cart
- `POST /removefromcart` - Remove item from cart
- `POST /getcartdata` - Get cart data

### File Upload
- `POST /upload` - Upload product images

## 🔄 Development Workflow

1. **Local Development**
   - Use development environment variables
   - Hot reload enabled for all applications
   - MongoDB local or Atlas connection

2. **Testing**
   - Unit tests (implement with Jest)
   - Integration tests
   - End-to-end tests (implement with Cypress)

3. **Deployment**
   - Choose your preferred cloud platform
   - Environment-specific configurations
   - Database migrations (if needed)

## 📈 Performance Optimization

- **Frontend**: Code splitting, lazy loading
- **Backend**: Database indexing, caching
- **Images**: Compression, CDN integration
- **Deployment**: Cloud hosting, load balancing

## 🛡️ Security Checklist

- ✅ Environment variables for sensitive data
- ✅ JWT token authentication
- ✅ Rate limiting
- ✅ Security headers (Helmet)
- ✅ CORS configuration
- ✅ Input validation
- ⚠️ Password hashing (implement bcrypt)
- ⚠️ HTTPS enforcement
- ⚠️ Database security rules

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Issues**
   - Check connection string format
   - Verify network access in MongoDB Atlas
   - Ensure IP whitelist is configured

2. **CORS Errors**
   - Update CORS_ORIGIN in backend environment
   - Check frontend API URL configuration

3. **Build Failures**
   - Clear node_modules and reinstall
   - Check Node.js version compatibility
   - Verify environment variables

### Logs

- **Backend**: Check console output and log files
- **Frontend**: Browser developer tools
- **Cloud Platform**: Check deployment logs in dashboard

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
- Create an issue in the repository
- Check the troubleshooting section
- Review the deployment logs

---

**Happy Coding! 🚀**
