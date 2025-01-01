// types/ads.ts
export interface JobAd {
  salaryrange: string;
  jobtype: string;
  applicationdeadline: string;
  companyname: string;
  id: number; // İlanın benzersiz kimliği
  title: string; // İlan başlığı
  description: string; // İlan açıklaması
  companyName: string; // Firma adı
  location?: string; // Konum (opsiyonel)
  salaryRange?: string; // Maaş aralığı (opsiyonel)
  jobType?: "Full-time" | "Part-time" | "Freelance"; // Çalışma türü
  category?: string; // İş kategorisi
  tags?: string[]; // Etiketler
  postedDate?: string; // Yayınlanma tarihi (ISO formatında tarih string)
  applicationDeadline?: string; // Başvuru son tarihi (ISO formatında tarih string)
  requirements?: string; // Gereklilikler
  benefits?: string; // Avantajlar
  contactEmail?: string; // Başvuru e-postası
  isActive: boolean; // İlanın aktifliği
}
