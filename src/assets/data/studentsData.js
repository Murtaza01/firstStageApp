import { v4 as uuidv4 } from "uuid";

const studentData = [
  {
    id: uuidv4(),
    studentName: "احمد احسان حسن",
    scores: [
      {
        subject: "نحو",
        mark: 30,
      },
      {
        subject: "محادثة",
        mark: 24,
      },
      {
        subject: "قراءة",
        mark: 30,
      },
      {
        subject: "صوت",
        mark: 28,
      },
      {
        subject: "فرنسي",
        mark: 30,
      },
      {
        subject: "حاسوب",
        mark: 36,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 28,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "احمد حسين عامر",
    scores: [
      {
        subject: "نحو",
        mark: 17,
      },
      {
        subject: "محادثة",
        mark: 21,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 25,
      },
      {
        subject: "فرنسي",
        mark: 21,
      },
      {
        subject: "حاسوب",
        mark: 34,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 28,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "احمد فارس كاظم",
    scores: [
      {
        subject: "نحو",
        mark: 30,
      },
      {
        subject: "محادثة",
        mark: 29,
      },
      {
        subject: "قراءة",
        mark: 36,
      },
      {
        subject: "صوت",
        mark: 38,
      },
      {
        subject: "فرنسي",
        mark: 36,
      },
      {
        subject: "حاسوب",
        mark: 28,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 24,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "احمد ماجد حسن",
    scores: [
      {
        subject: "نحو",
        mark: 16,
      },
      {
        subject: "محادثة",
        mark: 17,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 28,
      },
      {
        subject: "فرنسي",
        mark: 23,
      },
      {
        subject: "حاسوب",
        mark: 26,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 25,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "افراح جبار جري",
    scores: [
      {
        subject: "نحو",
        mark: 11,
      },
      {
        subject: "محادثة",
        mark: 10,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 29,
      },
      {
        subject: "فرنسي",
        mark: 32,
      },
      {
        subject: "حاسوب",
        mark: 26,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 22,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "الاء فاضل سريح",
    scores: [
      {
        subject: "نحو",
        mark: 28,
      },
      {
        subject: "محادثة",
        mark: 30,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 32,
      },
      {
        subject: "فرنسي",
        mark: 33,
      },
      {
        subject: "حاسوب",
        mark: 34,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 26,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "ايات عمار شاهين",
    scores: [
      {
        subject: "نحو",
        mark: 22,
      },
      {
        subject: "محادثة",
        mark: 30,
      },
      {
        subject: "قراءة",
        mark: 30,
      },
      {
        subject: "صوت",
        mark: 30,
      },
      {
        subject: "فرنسي",
        mark: 33,
      },
      {
        subject: "حاسوب",
        mark: 32,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 25,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "ايثار مازن صبيح",
    scores: [
      {
        subject: "نحو",
        mark: 18,
      },
      {
        subject: "محادثة",
        mark: 19,
      },
      {
        subject: "قراءة",
        mark: 32,
      },
      {
        subject: "صوت",
        mark: 31,
      },
      {
        subject: "فرنسي",
        mark: 26,
      },
      {
        subject: "حاسوب",
        mark: 20,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 23,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "ايلاف صالح عبد",
    scores: [
      {
        subject: "نحو",
        mark: 17,
      },
      {
        subject: "محادثة",
        mark: 22,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 29,
      },
      {
        subject: "فرنسي",
        mark: 25,
      },
      {
        subject: "حاسوب",
        mark: 30,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 32,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "ايه محمد عبد الكريم",
    scores: [
      {
        subject: "نحو",
        mark: 27,
      },
      {
        subject: "محادثة",
        mark: 25,
      },
      {
        subject: "قراءة",
        mark: 30,
      },
      {
        subject: "صوت",
        mark: 28,
      },
      {
        subject: "فرنسي",
        mark: 27,
      },
      {
        subject: "حاسوب",
        mark: 24,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 30,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "تبارك ياسر عبد الرزاق",
    scores: [
      {
        subject: "نحو",
        mark: 26,
      },
      {
        subject: "محادثة",
        mark: 13,
      },
      {
        subject: "قراءة",
        mark: 32,
      },
      {
        subject: "صوت",
        mark: 35,
      },
      {
        subject: "فرنسي",
        mark: 37,
      },
      {
        subject: "حاسوب",
        mark: 32,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 30,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "دانية محمود عبد الواحد",
    scores: [
      {
        subject: "نحو",
        mark: 25,
      },
      {
        subject: "محادثة",
        mark: 28,
      },
      {
        subject: "قراءة",
        mark: 30,
      },
      {
        subject: "صوت",
        mark: 30,
      },
      {
        subject: "فرنسي",
        mark: 28,
      },
      {
        subject: "حاسوب",
        mark: 30,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 35,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "ربا عامر كاظم",
    scores: [
      {
        subject: "نحو",
        mark: 5,
      },
      {
        subject: "محادثة",
        mark: 16,
      },
      {
        subject: "قراءة",
        mark: 34,
      },
      {
        subject: "صوت",
        mark: 38,
      },
      {
        subject: "فرنسي",
        mark: 30,
      },
      {
        subject: "حاسوب",
        mark: 26,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 29,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "زمن علي عباس",
    scores: [
      {
        subject: "نحو",
        mark: 20,
      },
      {
        subject: "محادثة",
        mark: 19,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 24,
      },
      {
        subject: "فرنسي",
        mark: 29,
      },
      {
        subject: "حاسوب",
        mark: 40,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 29,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "زهراء رمزي كاطع",
    scores: [
      {
        subject: "نحو",
        mark: 20,
      },
      {
        subject: "محادثة",
        mark: 17,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 28,
      },
      {
        subject: "فرنسي",
        mark: 32,
      },
      {
        subject: "حاسوب",
        mark: 22,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 25,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "زينب محمد راضي",
    scores: [
      {
        subject: "نحو",
        mark: 29,
      },
      {
        subject: "محادثة",
        mark: 27,
      },
      {
        subject: "قراءة",
        mark: 36,
      },
      {
        subject: "صوت",
        mark: 31,
      },
      {
        subject: "فرنسي",
        mark: 29,
      },
      {
        subject: "حاسوب",
        mark: 32,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 30,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "زينة حسين مراد",
    scores: [
      {
        subject: "نحو",
        mark: 17,
      },
      {
        subject: "محادثة",
        mark: 10,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 24,
      },
      {
        subject: "فرنسي",
        mark: 30,
      },
      {
        subject: "حاسوب",
        mark: 24,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 26,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "شهد عبد الكريم لهمود",
    scores: [
      {
        subject: "نحو",
        mark: 10,
      },
      {
        subject: "محادثة",
        mark: 13,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 22,
      },
      {
        subject: "فرنسي",
        mark: 30,
      },
      {
        subject: "حاسوب",
        mark: 20,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 23,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "شهد ياسين خليبص",
    scores: [
      {
        subject: "نحو",
        mark: 16,
      },
      {
        subject: "محادثة",
        mark: 15,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 26,
      },
      {
        subject: "فرنسي",
        mark: 31,
      },
      {
        subject: "حاسوب",
        mark: 26,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 26,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "شهيناز غائب عوده ",
    scores: [
      {
        subject: "نحو",
        mark: 22,
      },
      {
        subject: "محادثة",
        mark: 19,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 25,
      },
      {
        subject: "فرنسي",
        mark: 28,
      },
      {
        subject: "حاسوب",
        mark: 34,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 30,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "طيبه فراس عبد الحسين",
    scores: [
      {
        subject: "نحو",
        mark: 25,
      },
      {
        subject: "محادثة",
        mark: 20,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 32,
      },
      {
        subject: "فرنسي",
        mark: 28,
      },
      {
        subject: "حاسوب",
        mark: 34,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 35,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "عباس محمد عطية",
    scores: [
      {
        subject: "نحو",
        mark: 22,
      },
      {
        subject: "محادثة",
        mark: 30,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 27,
      },
      {
        subject: "فرنسي",
        mark: 31,
      },
      {
        subject: "حاسوب",
        mark: 36,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 26,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "غادة زيد ابراهيم ",
    scores: [
      {
        subject: "نحو",
        mark: 35,
      },
      {
        subject: "محادثة",
        mark: 40,
      },
      {
        subject: "قراءة",
        mark: 40,
      },
      {
        subject: "صوت",
        mark: 35,
      },
      {
        subject: "فرنسي",
        mark: 40,
      },
      {
        subject: "حاسوب",
        mark: 40,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 36,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "فاطمه هادي جاسم",
    scores: [
      {
        subject: "نحو",
        mark: 18,
      },
      {
        subject: "محادثة",
        mark: 23,
      },
      {
        subject: "قراءة",
        mark: 34,
      },
      {
        subject: "صوت",
        mark: 20,
      },
      {
        subject: "فرنسي",
        mark: 28,
      },
      {
        subject: "حاسوب",
        mark: 24,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 36,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "محمد صفاء حسون",
    scores: [
      {
        subject: "نحو",
        mark: 23,
      },
      {
        subject: "محادثة",
        mark: 16,
      },
      {
        subject: "قراءة",
        mark: 30,
      },
      {
        subject: "صوت",
        mark: 28,
      },
      {
        subject: "فرنسي",
        mark: 34,
      },
      {
        subject: "حاسوب",
        mark: 26,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 27,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "مرتضى عبد الحسين شافي",
    scores: [
      {
        subject: "نحو",
        mark: 40,
      },
      {
        subject: "محادثة",
        mark: 38,
      },
      {
        subject: "قراءة",
        mark: 36,
      },
      {
        subject: "صوت",
        mark: 34,
      },
      {
        subject: "فرنسي",
        mark: 40,
      },
      {
        subject: "حاسوب",
        mark: 40,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 32,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "مريم اثير فيصل",
    scores: [
      {
        subject: "نحو",
        mark: 13,
      },
      {
        subject: "محادثة",
        mark: 20,
      },
      {
        subject: "قراءة",
        mark: 34,
      },
      {
        subject: "صوت",
        mark: 32,
      },
      {
        subject: "فرنسي",
        mark: 30,
      },
      {
        subject: "حاسوب",
        mark: 24,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 29,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "مريم مازن حمدي",
    scores: [
      {
        subject: "نحو",
        mark: 37,
      },
      {
        subject: "محادثة",
        mark: 35,
      },
      {
        subject: "قراءة",
        mark: 40,
      },
      {
        subject: "صوت",
        mark: 35,
      },
      {
        subject: "فرنسي",
        mark: 40,
      },
      {
        subject: "حاسوب",
        mark: 38,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 32,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "مقتدى محمد زيدان",
    scores: [
      {
        subject: "نحو",
        mark: 16,
      },
      {
        subject: "محادثة",
        mark: 14,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 32,
      },
      {
        subject: "فرنسي",
        mark: 31,
      },
      {
        subject: "حاسوب",
        mark: 24,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 23,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "ملاك احمد فؤاد",
    scores: [
      {
        subject: "نحو",
        mark: 29,
      },
      {
        subject: "محادثة",
        mark: 32,
      },
      {
        subject: "قراءة",
        mark: 36,
      },
      {
        subject: "صوت",
        mark: 36,
      },
      {
        subject: "فرنسي",
        mark: 38,
      },
      {
        subject: "حاسوب",
        mark: 32,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 28,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "ميمونه محمد علي",
    scores: [
      {
        subject: "نحو",
        mark: 27,
      },
      {
        subject: "محادثة",
        mark: 18,
      },
      {
        subject: "قراءة",
        mark: 32,
      },
      {
        subject: "صوت",
        mark: 34,
      },
      {
        subject: "فرنسي",
        mark: 35,
      },
      {
        subject: "حاسوب",
        mark: 32,
      },
      {
        subject: "حقوق الانسان",
        mark: 40,
      },
      {
        subject: "ادب",
        mark: 31,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "نبا كريم قاسم",
    scores: [
      {
        subject: "نحو",
        mark: 28,
      },
      {
        subject: "محادثة",
        mark: 25,
      },
      {
        subject: "قراءة",
        mark: 38,
      },
      {
        subject: "صوت",
        mark: 26,
      },
      {
        subject: "فرنسي",
        mark: 33,
      },
      {
        subject: "حاسوب",
        mark: 24,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 30,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "نور الهدى سعد عويد",
    scores: [
      {
        subject: "نحو",
        mark: 8,
      },
      {
        subject: "محادثة",
        mark: 15,
      },
      {
        subject: "قراءة",
        mark: 30,
      },
      {
        subject: "صوت",
        mark: 21,
      },
      {
        subject: "فرنسي",
        mark: 28,
      },
      {
        subject: "حاسوب",
        mark: 30,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 27,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "هدى حسين داخل",
    scores: [
      {
        subject: "نحو",
        mark: 9,
      },
      {
        subject: "محادثة",
        mark: 17,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 27,
      },
      {
        subject: "فرنسي",
        mark: 22,
      },
      {
        subject: "حاسوب",
        mark: 34,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 26,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "ياسمين زهير جاسم",
    scores: [
      {
        subject: "نحو",
        mark: 24,
      },
      {
        subject: "محادثة",
        mark: 16,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 27,
      },
      {
        subject: "فرنسي",
        mark: 38,
      },
      {
        subject: "حاسوب",
        mark: 38,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 31,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "يسر علي داود",
    scores: [
      {
        subject: "نحو",
        mark: 12,
      },
      {
        subject: "محادثة",
        mark: 10,
      },
      {
        subject: "قراءة",
        mark: 28,
      },
      {
        subject: "صوت",
        mark: 22,
      },
      {
        subject: "فرنسي",
        mark: 28,
      },
      {
        subject: "حاسوب",
        mark: 20,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 21,
      },
    ],
  },
  {
    id: uuidv4(),
    studentName: "فاطمة حسين نعمة",
    scores: [
      {
        subject: "نحو",
        mark: 0,
      },
      {
        subject: "محادثة",
        mark: 0,
      },
      {
        subject: "قراءة",
        mark: 36,
      },
      {
        subject: "صوت",
        mark: 27,
      },
      {
        subject: "فرنسي",
        mark: 0,
      },
      {
        subject: "حاسوب",
        mark: 0,
      },
      {
        subject: "حقوق الانسان",
        mark: 0,
      },
      {
        subject: "ادب",
        mark: 0,
      },
    ],
  },
];

export default studentData;
