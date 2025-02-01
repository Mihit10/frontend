"use client";


import { Carousel } from "../components/ui/Carousel";

export function QuickReport() {
  const slideData = [
    {
        title: "Women & Children Safety",
        button: "Register Complaint",
        src: "https://static.wixstatic.com/media/a27d24_c6abe281f39648409aba0f4a08e58749~mv2.jpg/v1/fill/w_560,h_560,al_c,lg_1,q_80/a27d24_c6abe281f39648409aba0f4a08e58749~mv2.jpg",
      },
      {
        title: "Financial Fraud",
        button: "Report Now",
        src: "https://cbx-prod.b-cdn.net/COLOURBOX52266555.jpg?width=800&height=800&quality=70",
      },
      {
        title: "Phishing & Scams",
        button: "Take Action",
        src: "https://images.ctfassets.net/bwma3u9eegsf/1JZDPgGqRg9dkAbknOGKAg/c632a71382b214e0e38c6fd4c8ea8f4e/How_to_avoid_20_common_phishing_scam_examples.png?fm=webp&w=1000",
      },
      {
        title: "Bank Account Fraud",
        button: "File Complaint",
        src: "https://www.bankingexchange.com/media/k2/items/cache/8d99deee661e4f6f88117ff3a9193d91_XL.jpg?t=20210317_211143",
      },
      {
        title: "Other Cyber Crimes",
        button: "Report Incident",
        src: "https://cdn3.vectorstock.com/i/1000x1000/47/67/cyber-crime-vector-31444767.jpg",
      },
  ];
  return (
    (<div className="relative overflow-hidden w-full h-full py-20 bg-[#162A45]">
      <Carousel slides={slideData} />
    </div>)
  );
}
