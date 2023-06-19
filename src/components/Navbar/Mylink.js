export const links = [
  {
    id: 1,
    name: "Hizmetlerimiz",
    submenu: true,
    type: "mainButton",
    sublinks: [
      {
        id: 2,
        Head: "Teknik Hizmetler",
        type: "parentButton",
        sublink: [
          {
            id: 3,
            name: "Frontend Teknolojileri",
            link: "/frontend-teknolojileri",
            type: "childButton",
          },
          {
            id: 4,
            name: "Backend Teknolojileri",
            link: "/backend-teknolojileri",
            type: "childButton",
          },
          {
            id: 5,
            name: "AWS Hizmetleri",
            link: "/aws-hizmetleri",
            type: "childButton",
          },
        ],
      },
      {
        id: 6,
        Head: "Danışmanlık Hizmetleri",
        type: "parentButton",
        sublink: [
          {
            id: 7,
            name: "Teknik Destek",
            link: "/teknik-destek",
            type: "childButton",
          },
          {
            id: 8,
            name: "Bilgilendirme Hizmetleri",
            link: "/bilgilendirme-hizmetleri",
            type: "childButton",
          },
          {
            id: 9,
            name: "Mentorluk Hizmetleri",
            link: "/mentorluk-hizmetleri",
            type: "childButton",
          },
          {
            id: 10,
            name: "Danışmanlık Eğitimleri",
            type: "parentButton",
            sublinkes: [
              {
                id: 26,
                sname: "Sertifikalı Danışmanlık Hizmetleri",
                type: "childButton",
                link: "/sertifikali-danismanlik-hizmetleri",
              },
              {
                id: 27,
                sname: "Kurumsal Danışmanlık Hizmeti",
                type: "childButton",
                link: "/kurumsal-danismanlik-hizmeti",
              },
            ],
          },
          {
            id: 11,
            name: "Eğitim Öğretim Planlama",
            link: "/egitim-ogretim-planlama",
            type: "childButton",
          },
          {
            id: 12,
            name: "Yazılım Danışmanlığı",
            link: "/yazilim-danismanliği",
            type: "childButton",
          },
          {
            id: 13,
            name: "Proje Danışmanlığı",
            link: "/proje-danismanligi",
            type: "childButton",
          },
        ],
      },
      {
        id: 14,
        Head: "Hatalı Altyapı Onarımı",
        sublink: [
          { name: "Hatalı Altyapı Onarımı", link: "/hatali-altyapi-onarimi" },
        ],
      },
    ],
  },
  {
    id: 15,
    name: "Hakkımızda",
    submenu: true,
    sublinks: [
      {
        id: 19,
        Head: "Biz Kimiz",
        sublink: [{ name: "Biz Kimiz", link: "/biz-kimiz" }],
      },
      {
        id: 20,
        Head: "Kurumsal",
        sublink: [{ name: "Kurumsal", link: "/kurumsal" }],
      },
      {
        id: 21,
        Head: "Referanslarımız",
        sublink: [
          {
            id: 22,
            name: "Geçmiş Referanslar",
            // link: "/gecmisreferanslarimiz",
            sublinkes: [
              {
                id: 28,
                sname: "x referansı",
                type: "childButton",
                link: "/x-referansi",
              },
              {
                id: 29,
                sname: "y referansı",
                type: "childButton",
                link: "/y-referansi",
              },
              {
                id: 30,
                sname: "z referansı",
                type: "childButton",
                link: "/z-referansi",
              },
            ],
          },
          {
            id: 23,
            name: "Gelecek Referanslar",
            // link: "/gelecekreferanslarimiz",
            sublinkes: [
              {
                id: 31,
                sname: "a referansı",
                type: "childButton",
                link: "/a-referansi",
              },
              {
                id: 32,
                sname: "b referansı",
                type: "childButton",
                link: "/b-referansi",
              },
              {
                id: 33,
                sname: "c referansı",
                type: "childButton",
                link: "/c-referansi",
              },
            ],
          },
        ],
      },
      {
        id: 24,
        Head: "Vizyon",
        sublink: [{ name: "Vizyon", link: "/vizyon" }],
      },
      {
        id: 25,
        Head: "Misyon",
        sublink: [{ name: "Misyon", link: "/misyon" }],
      },
    ],
  },
];
