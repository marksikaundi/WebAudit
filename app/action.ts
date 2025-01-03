'use server'

import { performSecurityAudit } from './utils/securityAudit'
import { sendEmail } from './utils/sendEmail'

export async function performAudit(formData: FormData) {
  const url = formData.get('url') as string
  const email = formData.get('email') as string

  if (!url || !email) {
    return { success: false, error: 'URL and email are required' }
  }

  try {
    const auditResults = await performSecurityAudit(url)
    const report = generateReport(url, auditResults)
    await sendEmail(email, 'Security Audit Report', report)
    return { success: true }
  } catch (error) {
    console.error('Audit error:', error)
    return { success: false, error: 'An error occurred during the audit process' }
  }
}

function generateReport(url: string, results: Record<string, unknown>) {
  return `
Security Audit Report for ${url}

${Object.entries(results).map(([key, value]) => `${key}: ${value}`).join('\n')}

This is a security report audit for ${url}. For a more comprehensive analysis, please consult with a cybersecurity professional.
  `.trim()
}

