#!/bin/bash

# E-commerce Application Deployment Script

set -e

echo "🚀 Starting E-commerce Application Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_requirements() {
    print_status "Checking requirements..."
    
    if ! command -v docker &> /dev/null; then
        print_error "Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        print_error "Docker Compose is not installed. Please install Docker Compose first."
        exit 1
    fi
    
    print_status "Requirements check passed!"
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    
    # Backend dependencies
    print_status "Installing backend dependencies..."
    cd Back-end
    npm install
    cd ..
    
    # Frontend dependencies
    print_status "Installing frontend dependencies..."
    cd Front-end
    npm install
    cd ..
    
    # Admin dependencies
    print_status "Installing admin dependencies..."
    cd Admin
    npm install
    cd ..
    
    print_status "Dependencies installed successfully!"
}

# Build and deploy with Docker
deploy_docker() {
    print_status "Building and deploying with Docker..."
    
    # Check if .env file exists
    if [ ! -f .env ]; then
        print_warning ".env file not found. Creating from template..."
        cp .env.example .env
        print_warning "Please update the .env file with your configuration!"
    fi
    
    # Build and start containers
    docker-compose down
    docker-compose build --no-cache
    docker-compose up -d
    
    print_status "Docker deployment completed!"
    print_status "Backend: http://localhost:4000"
    print_status "Frontend: http://localhost:3000"
    print_status "Admin: http://localhost:3001"
}

# Deploy to cloud platforms
deploy_cloud() {
    print_status "Cloud deployment options:"
    echo "1. Railway"
    echo "2. Render"
    echo "3. Vercel (Frontend/Admin only)"
    echo "4. Heroku"
    
    read -p "Select deployment platform (1-4): " choice
    
    case $choice in
        1)
            deploy_railway
            ;;
        2)
            deploy_render
            ;;
        3)
            deploy_vercel
            ;;
        4)
            deploy_heroku
            ;;
        *)
            print_error "Invalid choice!"
            ;;
    esac
}

# Railway deployment
deploy_railway() {
    print_status "Deploying to Railway..."
    
    if ! command -v railway &> /dev/null; then
        print_warning "Railway CLI not found. Installing..."
        npm install -g @railway/cli
    fi
    
    railway login
    railway link
    railway up
    
    print_status "Railway deployment completed!"
}

# Render deployment
deploy_render() {
    print_status "Deploying to Render..."
    print_status "Please follow these steps:"
    echo "1. Create a new Web Service on Render"
    echo "2. Connect your GitHub repository"
    echo "3. Set build command: npm install && npm run build"
    echo "4. Set start command: npm start"
    echo "5. Add environment variables from .env file"
    
    print_status "Render deployment instructions provided!"
}

# Vercel deployment
deploy_vercel() {
    print_status "Deploying to Vercel..."
    
    if ! command -v vercel &> /dev/null; then
        print_warning "Vercel CLI not found. Installing..."
        npm install -g vercel
    fi
    
    # Deploy Frontend
    print_status "Deploying frontend to Vercel..."
    cd Front-end
    vercel --prod
    cd ..
    
    # Deploy Admin
    print_status "Deploying admin to Vercel..."
    cd Admin
    vercel --prod
    cd ..
    
    print_status "Vercel deployment completed!"
}

# Main deployment function
main() {
    echo "🛠️  E-commerce Deployment Script"
    echo "================================="
    
    # Check what type of deployment to perform
    echo "Select deployment type:"
    echo "1. Local Docker deployment"
    echo "2. Cloud platform deployment"
    echo "3. Install dependencies only"
    
    read -p "Enter your choice (1-3): " deploy_choice
    
    case $deploy_choice in
        1)
            check_requirements
            install_dependencies
            deploy_docker
            ;;
        2)
            check_requirements
            install_dependencies
            deploy_cloud
            ;;
        3)
            install_dependencies
            ;;
        *)
            print_error "Invalid choice!"
            exit 1
            ;;
    esac
    
    print_status "Deployment completed successfully! 🎉"
}

# Run main function
main "$@"
