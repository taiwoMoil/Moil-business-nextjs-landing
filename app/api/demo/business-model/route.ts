import { NextRequest, NextResponse } from 'next/server';
import { generateBusinessModel } from '../../../../src/business/utils/geminiApi';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { businessName, industry, targetMarket } = body;

    // Validate required fields
    if (!businessName || !industry || !targetMarket) {
      return NextResponse.json(
        { error: 'Missing required fields: businessName, industry, targetMarket' },
        { status: 400 }
      );
    }

    // Generate business model using Gemini AI
    const result = await generateBusinessModel({
      businessName,
      industry,
      targetMarket
    });

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data: result.data,
      businessName: result.businessName,
      industry: result.industry,
      message: 'Business model generated successfully'
    });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
