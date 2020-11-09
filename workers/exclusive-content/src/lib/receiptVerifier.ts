export async function verifyReceipt(verifier: string, receipt: string) {
  const endpoint = new URL(
    //TODO: change to latest endpoint name once merged
    verifier.endsWith('/') ? `${verifier}receipts` : `${verifier}/receipts`,
  )
  const response = await fetch(endpoint.href, { method: 'POST', body: receipt })
  return response.ok
}
