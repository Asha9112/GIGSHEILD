const CLAIMS_KEY = "gigshieldClaims";

export function getClaims() {
  try {
    const claims = localStorage.getItem(CLAIMS_KEY);

    return claims ? JSON.parse(claims) : [];
  } catch (error) {
    console.error("Unable to load claims:", error);
    return [];
  }
}

export function generateClaimId() {
  const claims = getClaims();

  const nextNumber = claims.length + 1;

  return `CLM${String(nextNumber).padStart(5, "0")}`;
}

export function saveClaim(claimData) {
  const claims = getClaims();

  const newClaim = {
    claimId: generateClaimId(),
    submittedOn: new Date().toLocaleDateString(),
    status: "Pending Review",
    ...claimData,
  };

  claims.unshift(newClaim);

  localStorage.setItem(
    CLAIMS_KEY,
    JSON.stringify(claims)
  );

  return newClaim;
}

export function getClaimById(id) {
  return getClaims().find(
    (claim) => claim.claimId === id
  );
}

export function updateClaimStatus(id, status) {
  const claims = getClaims();

  const updatedClaims = claims.map((claim) =>
    claim.claimId === id
      ? { ...claim, status }
      : claim
  );

  localStorage.setItem(
    CLAIMS_KEY,
    JSON.stringify(updatedClaims)
  );
}