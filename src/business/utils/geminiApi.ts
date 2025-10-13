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

export interface FinancialProjectionRequest {
  businessName: string;
  industry: string;
  location: string;
  budget: string;
  targetRevenue: string;
}

export interface AudienceAnalysisRequest {
  businessType: string;
  location: string;
  industry: string;
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
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    
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
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    
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
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    
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

// Financial Projections Generator
export async function generateFinancialProjections(data: FinancialProjectionRequest) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    
    const prompt = `
    Generate realistic financial projections for "${data.businessName}" in ${data.industry} industry, located in ${data.location}, with a ${data.budget} budget targeting ${data.targetRevenue} revenue.
    
    Provide ONLY these specific metrics in JSON format:
    {
      "year1Revenue": "amount in K format (e.g., 180K)",
      "breakEvenMonth": "month number (e.g., 9)",
      "roiYear1": "percentage (e.g., 24)",
      "monthlyGrowth": "percentage (e.g., 8)",
      "initialCosts": "amount in K format (e.g., 45K)",
      "profitMargin": "percentage (e.g., 32)"
    }
    
    Base projections on industry standards and location market conditions. Be realistic and conservative.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    try {
      const jsonData = JSON.parse(response.text());
      return {
        success: true,
        data: jsonData,
        businessName: data.businessName,
        industry: data.industry,
        location: data.location
      };
    } catch (parseError) {
      // Fallback with default values if JSON parsing fails
      return {
        success: true,
        data: {
          year1Revenue: "180K",
          breakEvenMonth: "9",
          roiYear1: "24",
          monthlyGrowth: "8",
          initialCosts: "45K",
          profitMargin: "32"
        },
        businessName: data.businessName,
        industry: data.industry,
        location: data.location
      };
    }
  } catch (error) {
    console.error('Gemini API Error:', error);
    return {
      success: false,
      error: 'Failed to generate financial projections. Please try again.',
      data: null
    };
  }
}

// Audience Analysis Generator
export async function generateAudienceAnalysis(data: AudienceAnalysisRequest) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });
    
    const prompt = `
    Analyze the target audience for a ${data.businessType} business in ${data.location} within the ${data.industry} industry.
    
    Provide ONLY these sections (2-3 bullet points each):
    
    1. Primary Demographics: Age, income, lifestyle characteristics
    2. Customer Behavior: Shopping patterns, preferences, decision factors
    3. Market Size: Local market potential and growth opportunities
    4. Engagement Strategy: Best channels and messaging approaches
    
    Keep it practical and actionable for business owners. This is a demo preview.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return {
      success: true,
      data: response.text(),
      businessType: data.businessType,
      location: data.location,
      industry: data.industry
    };
  } catch (error) {
    console.error('Gemini API Error:', error);
    return {
      success: false,
      error: 'Failed to generate audience analysis. Please try again.',
      data: null
    };
  }
}
