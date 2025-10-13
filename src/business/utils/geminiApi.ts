import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY_2 || '');

export interface BusinessModelRequest {
  businessName: string;
  industry: string;
  targetMarket: string;
}

export interface MarketResearchRequest {
  businessType: string;
  location: string;
  targetAudience: string;
}

export interface CompetitorAnalysisRequest {
  businessName: string;
  industry: string;
  location: string;
}

export interface BusinessPlanRequest {
  businessName: string;
  industry: string;
  budget: string;
  timeline: string;
}

// Business Model Canvas Generator
export async function generateBusinessModel(data: BusinessModelRequest) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    
    const prompt = `
    Generate a brief Business Model Canvas for a ${data.industry} business called "${data.businessName}" targeting ${data.targetMarket}.
    
    Provide ONLY the following in a concise format (2-3 bullet points each):
    
    1. Value Propositions (key benefits)
    2. Customer Segments (target customers)  
    3. Revenue Streams (how money is made)
    4. Key Activities (main business activities)
    
    Keep it brief and actionable. This is a demo preview.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return {
      success: true,
      data: response.text(),
      businessName: data.businessName,
      industry: data.industry
    };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return {
      success: false,
      error: 'Failed to generate business model. Please try again.',
      data: null
    };
  }
}

// Market Research Generator
export async function generateMarketResearch(data: MarketResearchRequest) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const prompt = `
    Provide brief market research insights for a ${data.businessType} business in ${data.location} targeting ${data.targetAudience}.
    
    Include ONLY these key metrics (keep each to 1-2 sentences):
    
    1. Market Size: Estimated market value and potential
    2. Target Demographics: Key customer characteristics  
    3. Growth Trends: Market growth rate and opportunities
    4. Key Insights: 2-3 actionable insights
    
    Focus on realistic, data-driven insights. This is a demo preview.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return {
      success: true,
      data: response.text(),
      businessType: data.businessType,
      location: data.location
    };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return {
      success: false,
      error: 'Failed to generate market research. Please try again.',
      data: null
    };
  }
}

// Competitor Analysis Generator
export async function generateCompetitorAnalysis(data: CompetitorAnalysisRequest) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const prompt = `
    Analyze the competitive landscape for "${data.businessName}" in the ${data.industry} industry in ${data.location}.
    
    Provide brief analysis covering:
    
    1. Main Competitors: 2-3 key competitors in the market
    2. Competitive Advantages: Potential differentiators
    3. Market Gaps: Opportunities not being addressed
    4. Positioning Strategy: Recommended market position
    
    Keep insights concise and actionable. This is a demo preview.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return {
      success: true,
      data: response.text(),
      businessName: data.businessName,
      industry: data.industry
    };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return {
      success: false,
      error: 'Failed to generate competitor analysis. Please try again.',
      data: null
    };
  }
}

// Business Plan Generator
export async function generateBusinessPlan(data: BusinessPlanRequest) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    
    const prompt = `
    Create a brief business plan outline for "${data.businessName}" in the ${data.industry} industry with a ${data.budget} budget over ${data.timeline}.
    
    Include these sections (2-3 points each):
    
    1. Executive Summary: Business concept and goals
    2. Market Strategy: How to reach customers
    3. Financial Projections: Revenue and cost estimates
    4. Next Steps: Immediate action items
    
    Keep it practical and focused. This is a demo preview.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return {
      success: true,
      data: response.text(),
      businessName: data.businessName,
      industry: data.industry,
      budget: data.budget
    };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return {
      success: false,
      error: 'Failed to generate business plan. Please try again.',
      data: null
    };
  }
}
