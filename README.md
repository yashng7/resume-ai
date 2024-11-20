# 🚀 ResumeAI – AI-Powered Resume Builder  

Build and deploy a professional **AI-powered** resume builder using **Next.js 15**, **Gemini-AI**, and **Stripe Checkout**.  

![Thumbnail]()

## ✨ Features  
✅ Multi-step form with **React Hook Form**  
✅ Dynamic form arrays using **useFieldArray**  
✅ Drag-and-drop functionality with **dnd-kit**  
✅ ✨ AI-powered auto-fill  
✅ Different **subscription tiers** with **Stripe**  
✅ 📱 **Mobile-responsive** design using **Tailwind CSS** & **Shadcn UI**  
✅ 🖨️ Print or save as **PDF** using **react-to-print**  
✅ 🔗 URL state management  
✅ 🗄️ **PostgreSQL** database + file uploads to **Vercel Blob**  
✅ 🔄 **Auto-save** feature to prevent data loss  
✅ & much more! 🚀  

## 📦 Tech Stack  
- **Frontend:** Next.js 15, TypeScript, Tailwind CSS, Shadcn UI  
- **Backend:** Next.js API routes, PostgreSQL, Prisma  
- **AI:** Gemini-AI API for smart resume generation  
- **Payments:** Stripe Checkout for subscription tiers  
- **File Storage:** Vercel Blob  
- **State Management:** React Hook Form, URL state management  

## 🛠️ Installation  

1️⃣ Clone the repository:  
```bash
git clone https://github.com/yashng7/resume-ai.git
cd resume-ai
```
## 🛠️ Installation  

### 2️⃣ Install dependencies:  
```bash
pnpm install
```

### 3️⃣ Set up environment variables in a .env file:
```bash
DATABASE_URL=your_postgres_database_url
NEXT_PUBLIC_STRIPE_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
GEMINI_AI_KEY=your_gemini_api_key
VERCEL_BLOB_URL=your_vercel_blob_url
```

### 4️⃣ Run the development server:
```bash
pnpm dev
```

Now, open http://localhost:3000 in your browser. 🚀

## 🚀 Deployment
To deploy on Vercel, run:

```bash
pnpm build
vercel deploy
```
## 📜 License
This project is licensed under the MIT License.
