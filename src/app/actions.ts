"use server";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactEmail(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const nom = formData.get("nom")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!nom || !email || !message) {
    return { status: "error", message: "Veuillez remplir tous les champs." };
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    return {
      status: "error",
      message: "Le service de contact n'est pas encore configuré.",
    };
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Nouveau message de ${nom} — Site Web Kotama Impôts`,
        from_name: "Site Web Kotama Impôts",
        name: nom,
        email,
        message,
        botcheck: formData.get("botcheck") ? true : false,
      }),
    });

    const data = await res.json();
    if (res.ok && data.success) {
      return { status: "success" };
    }
    return {
      status: "error",
      message: "Une erreur est survenue. Veuillez réessayer.",
    };
  } catch {
    return {
      status: "error",
      message: "Impossible d'envoyer le message. Vérifiez votre connexion.",
    };
  }
}
