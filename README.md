# Personal Website - Chris

A modern React TypeScript personal website designed for job applications, featuring a demos section to showcase projects and skills.

## Features

- **Modern React with TypeScript** - Type-safe development experience
- **Responsive Design** - Mobile-first approach with modern UI
- **Demos Section** - Showcase your projects and technical skills
- **Azure Deployment** - Cheap hosting with Azure Static Web Apps
- **CI/CD Pipeline** - Automated deployment with GitHub Actions

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: CSS Modules + Modern CSS
- **Deployment**: Azure Static Web Apps
- **CI/CD**: GitHub Actions
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git
- Azure account (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-azure-repo-url>
   cd PersonalWebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App (not recommended)

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   └── *.css           # Component styles
├── sections/           # Website sections
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About me section
│   ├── Demos.tsx       # Projects showcase
│   ├── Skills.tsx      # Skills display
│   ├── Contact.tsx     # Contact form
│   └── *.css           # Section styles
├── types/              # TypeScript type definitions
│   └── index.ts        # All type definitions
└── utils/              # Utility functions
```

## Deployment

### Azure Static Web Apps Setup

1. **Create Azure Static Web App**
   - Go to [Azure Portal](https://portal.azure.com)
   - Search for "Static Web Apps"
   - Click "Create"
   - Fill in the details:
     - **Subscription**: Your subscription
     - **Resource Group**: Create new or use existing
     - **Name**: `your-name-portfolio` (e.g., `chris-portfolio`)
     - **Region**: Choose closest to you
     - **Build Preset**: React
     - **App location**: `/`
     - **API location**: (leave empty)
     - **Output location**: `build`

2. **Connect to GitHub**
   - Choose "GitHub" as source
   - Select your repository
   - Choose the main branch
   - Click "Review + create"

3. **Configure Build Settings**
   - After creation, go to the Static Web App
   - Navigate to "Configuration" → "Build configuration"
   - Verify settings:
     ```
     App location: /
     API location: (empty)
     Output location: build
     ```

4. **Get Deployment Token**
   - Go to "Configuration" → "Tokens"
   - Copy the deployment token

### GitHub Setup

1. **Add Repository Secrets**
   - Go to your GitHub repository
   - Navigate to "Settings" → "Secrets and variables" → "Actions"
   - Add new repository secret:
     - **Name**: `AZURE_STATIC_WEB_APPS_API_TOKEN`
     - **Value**: Your deployment token from Azure

2. **Push to Main Branch**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Monitor Deployment**
   - Go to your Azure Static Web App
   - Check "Overview" for the live URL
   - Monitor deployment in "Actions" tab

### Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the project
npm run build

# Deploy using Azure CLI
az staticwebapp create --name your-app-name --source . --location "East US"
```

## Customization

### Personal Information
Update the following files with your information:

1. **Header.tsx** - Change "Chris" to your name
2. **Hero.tsx** - Update name, title, and description
3. **About.tsx** - Update personal story and stats
4. **Demos.tsx** - Add your actual projects
5. **Skills.tsx** - Update skills and proficiency levels
6. **Contact.tsx** - Update contact information and social links

### Styling
- Colors are defined in CSS variables in each component
- Main color scheme: Blue (#007bff), Gold (#ffd700), Gray (#333)
- Update colors in respective CSS files

### Projects
Add your projects to the `projects` array in `src/sections/Demos.tsx`:

```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Project description...',
  technologies: ['React', 'TypeScript', 'Node.js'],
  featured: true, // Mark your best projects
  liveUrl: 'https://your-demo-url.com',
  githubUrl: 'https://github.com/username/project'
}
```

## Cost Optimization

Azure Static Web Apps pricing:
- **Free Tier**: 2 GB storage, 100 GB bandwidth/month
- **Standard Tier**: $0.10/GB storage, $0.15/GB bandwidth

For a personal portfolio, the free tier should be sufficient.

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`
- Verify all imports are correct

### Deployment Issues
- Check GitHub Actions logs for build errors
- Verify Azure Static Web App configuration
- Ensure deployment token is correctly set in GitHub secrets

### Local Development
- Clear cache: `npm start -- --reset-cache`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is for personal use. Feel free to modify for your own portfolio.

## Contact

- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]
- Email: [Your Email]
