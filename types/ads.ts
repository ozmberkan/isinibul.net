export interface JobAd {
  _id: string; // MongoDB tarafından oluşturulan benzersiz kimlik
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
  appliedUsers?: string[]; // Başvuru yapan kullanıcıların ID'leri (isteğe bağlı)
  isActive: boolean; // İlanın aktifliği
  createdAt?: string; // Oluşturulma tarihi
  updatedAt?: string; // Güncellenme tarihi
}
