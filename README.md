# Caltech - Non-Profit Education Website

This is a full-featured, responsive website for "Caltech," a non-profit organization dedicated to providing educational opportunities and support to students in need. The application is built with a modern tech stack, including Next.js, Tailwind CSS, and ShadCN UI, ensuring a high-quality, performant, and accessible user experience.

## Key Features

- **Modern & Responsive Design**: Clean and accessible user experience on any device.
- **Dynamic Public-Facing Pages**: Includes sections for About Us, Programs, Success Stories, How to Get Involved, and Contact.
- **Secure Admin Section**: A feature-rich area for site management with a dedicated dashboard layout.
- **Full Authentication Flow**: Complete with login, sign-up, and forgot password functionality to protect admin routes.
- **Role-Based Access Control (RBAC)**: Two pre-configured roles (`Admin` and `Story Contributor`) to manage permissions. Admins have full access, while Story Contributors can only create content.
- **Volunteer Management**: A full CRUD (Create, Read, Update, Delete) interface for managing volunteers, including profile picture uploads.
- **Dynamic Donation System**: A user-friendly donation page with preset tiers and a custom amount option. Features a pop-up modal to initiate payments via a placeholder M-Pesa integration.
- **AI-Powered Story Generation**: An internal tool for admins to quickly generate uplifting success stories based on student data and an optional photo, powered by Google's Gemini model via Genkit.
- **Interactive UI Components**: Features an autoplay carousel on the homepage, testimonials, and modern, interactive cards and forms built with ShadCN UI.


## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **AI Integration**: [Genkit](https://firebase.google.com/docs/genkit)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) for validation
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20.x or later recommended)
- `npm`, `yarn`, or `pnpm` as your package manager.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

1.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add any necessary environment variables. For the AI features to work, you will need a Google AI API key.
    ```env
    # Example .env file
    GOOGLE_API_KEY="YOUR_GOOGLE_AI_API_KEY"

    # For a full M-Pesa integration, you would add your credentials here
    # MPESA_CONSUMER_KEY="YOUR_KEY"
    # MPESA_CONSUMER_SECRET="YOUR_SECRET"
    # MPESA_SHORTCODE="YOUR_TILL_OR_PAYBILL_NUMBER"
    # MPESA_PASSKEY="YOUR_PASSKEY"
    ```

2.  **Start the server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:3000`.

## Deployment

This Next.js application is optimized for deployment on platforms that support Node.js, such as:

-   [Vercel](https://vercel.com/) (Recommended)
-   [Netlify](https://www.netlify.com/)
-   [AWS Amplify](https://aws.amazon.com/amplify/)
-   A self-hosted Node.js server.

When deploying, ensure that you set the environment variables in your hosting provider's dashboard to enable all features.
