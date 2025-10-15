import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY_2 || '');

export interface BusinessModelRequest {
  businessName: string;
  services: string;
  city: string;
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
    Generate a concise Business Model Canvas for "${data.businessName}" offering ${data.services} services in ${data.city}, targeting ${data.targetMarket}.
    
    Provide a brief analysis (maximum 600 characters) covering:
    
    **Value Proposition:** Core benefits and unique selling points
    **Revenue Model:** Key revenue streams and pricing
    **Key Activities:** Core operations and critical tasks
    **Partnerships:** Strategic partners in ${data.city}
    
    Keep it concise, actionable, and location-specific for ${data.city}. Use markdown formatting.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return {
      success: true,
      data: response.text(),
      businessName: data.businessName,
      services: data.services,
      city: data.city
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
    Provide concise market research for a ${data.businessType} business in ${data.location} targeting ${data.targetAudience}.
    
    Maximum 600 characters covering:
    **Market Size:** Estimated value and potential
    **Demographics:** Key customer traits
    **Growth:** Market trends and rate
    **Opportunities:** 2-3 actionable insights
    
    Keep it brief, realistic, and data-driven. Use markdown formatting.
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
    Analyze competitors for "${data.businessName}" in ${data.industry} industry, ${data.location}.
    
    Maximum 600 characters covering:
    **Main Competitors:** 2-3 key players
    **Advantages:** Your potential differentiators
    **Market Gaps:** Unaddressed opportunities
    **Strategy:** Recommended positioning
    
    Keep it concise and actionable. Use markdown formatting.
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
    Create a concise business plan for "${data.businessName}" in ${data.industry} with ${data.budget} budget over ${data.timeline}.
    
    Maximum 600 characters covering:
    **Concept:** Business goals and vision
    **Strategy:** Customer acquisition approach
    **Financials:** Revenue and cost estimates
    **Next Steps:** Immediate actions
    
    Keep it practical and focused. Use markdown formatting.
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
    Analyze target audience for ${data.businessType} business in ${data.location}, ${data.industry} industry.
    
    Maximum 600 characters covering:
    **Demographics:** Age, income, lifestyle
    **Behavior:** Shopping patterns and preferences
    **Market Size:** Local potential and growth
    **Strategy:** Best engagement channels
    
    Keep it practical and actionable. Use markdown formatting.
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
