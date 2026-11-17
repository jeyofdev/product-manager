const API_URL = "http://localhost:3000";

export const getAllProducts = async () => {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Impossible de récupérer les produits");
  }

  return response.json();
};

export const getAllProductById = async (productId) => {
  const response = await fetch(`${API_URL}/products/${productId}`);

  if (!response.ok) {
    throw new Error("Impossible de récupérer le produit");
  }

  return response.json();
};

export const createProduct = async (product) => {
  try {
    const response = await fetch(`${API_URL}/products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la création");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

export const updateProduct = async (productId, product) => {
  const response = await fetch(`${API_URL}/products/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la modification du produit");
  }

  return response.json();
};

export const deleteProduct = async (productId) => {
  const response = await fetch(`${API_URL}/products/${productId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la suppression du produit");
  }

  return true;
};

export const patchProduct = async (productId, product) => {
  try {
    const response = await fetch(`${API_URL}/products/${productId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la modification du produit");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
