import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Метод не разрешен." });
  }

  const { name, phone } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Имя и телефон обязательны." });
  }

  try {
    const response = await fetch(
      "https://poryadokbyyu-production.up.railway.app/submit_form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
      }
    );

    if (response.ok) {
      return res.status(200).json({ message: "Заявка успешно отправлена!" });
    } else {
      const errorText = await response.text();
      console.error("Ошибка сервера:", errorText);
      return res
        .status(response.status)
        .json({
          error: `Ошибка отправки заявки. Код ошибки: ${response.status}`,
        });
    }
  } catch (error) {
    console.error("Ошибка при отправке запроса:", error);
    return res.status(500).json({ error: "Внутренняя ошибка сервера." });
  }
}
