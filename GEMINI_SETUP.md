# Google Gemini API Integration Setup

## 📦 Required Package Installation

Run the following command to install the Google Generative AI package:

```bash
npm install @google/generative-ai
```

## 🔑 Environment Variables Setup

Add the following to your `.env.local` file:

```env
GOOGLE_API_KEY_2=your_gemini_api_key_here
```

## 🚀 Getting Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key
5. Add it to your `.env.local` file

## 🎯 Interactive Demo Features

The integration provides 4 AI-powered demo tools:

### 1. **Business Model Canvas Generator**
- **Endpoint**: `/api/demo/business-model`
- **Input**: Business name, industry, target market
- **Output**: AI-generated business model with value propositions, customer segments, revenue streams

### 2. **Market Research Analyzer**
- **Endpoint**: `/api/demo/market-research`
- **Input**: Business type, location, target audience
- **Output**: Market size analysis, demographics, growth trends, key insights

### 3. **Competitor Analysis Tool**
- **Endpoint**: `/api/demo/competitor-analysis`
- **Input**: Business name, industry, location
- **Output**: Main competitors, competitive advantages, market gaps, positioning strategy

### 4. **Business Plan Generator**
- **Endpoint**: `/api/demo/business-plan`
- **Input**: Business name, industry, budget, timeline
- **Output**: Executive summary, market strategy, financial projections, action items

## 🔄 Demo Flow

1. **User Input**: Visitors fill out simple forms for each demo
2. **AI Processing**: Gemini API generates brief, actionable insights
3. **Preview Display**: Shows first 300 characters of AI response
4. **CTA Integration**: "View Complete Analysis" button redirects to business registration with referral tracking
5. **Lead Generation**: Captures interest and drives sign-ups

## 🎨 UI Features

- **Loading States**: Shows "Generating..." while API processes
- **Color-coded Results**: Each demo has unique gradient styling
- **Demo Badges**: "Demo Preview" labels clearly indicate limited access
- **Responsive Design**: Works perfectly on mobile and desktop
- **Error Handling**: Graceful fallbacks for API failures

## 📊 Benefits

- **Immediate Value**: Users get real AI insights instantly
- **Lead Qualification**: Engaged users are more likely to convert
- **Referral Tracking**: All CTAs preserve `ref` and `lg` parameters
- **Professional Appearance**: High-quality AI responses build trust
- **Scalable**: Can handle multiple concurrent demo requests

## 🔧 Technical Implementation

- **Client-side Forms**: React state management for user inputs
- **API Routes**: Next.js API routes handle Gemini integration
- **Error Boundaries**: Proper error handling and user feedback
- **TypeScript**: Full type safety for all API interactions
- **Responsive**: Mobile-first design with Tailwind CSS

## 🎯 Conversion Strategy

Each demo ends with a compelling CTA:
- "View Complete Analysis & Get Full Access"
- "View Complete Research & Get Full Access"
- "View Complete Business Plan & Get Full Access"

All CTAs use `openBusinessRegister({ ref: refQuery, lg: lgQuery })` to maintain referral tracking and drive conversions.
