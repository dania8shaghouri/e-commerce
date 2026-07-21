import { z } from "zod";
import type { Request, Response, NextFunction } from "express";

// validateRequest fonksiyonu olustur
const validateRequest =
  <T extends z.ZodTypeAny>(schema: T) =>
  // İkinci fonksiyon
  (req: Request, res: Response, next: NextFunction) => {
    // Validation yapılıyor
    // Kullanıcının gönderdiği req.body şemaya uygun mu diye kontrol ediliyor
    const result = schema.safeParse(req.body);

    if (!result.success) {
      // Hataları düzenle
      // issues: Bulunan tüm doğrulama hatalarının listesi
      const errors = result.error.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      }));

      return res.status(400).json({
        message: "Validation failed",
        errors,
      });
    }
    // controller'ın ham kullanıcı verisi yerine, doğrulanmış ve Zod'un dönüştürdüğü temiz veriyi kullanmasını sağla
    req.body = result.data;
    next();
  };

export default validateRequest;
