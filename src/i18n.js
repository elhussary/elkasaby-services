import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const language = localStorage.getItem("i18nextLng") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        brand: "Elkasaby Services",
        home: "Home",
        about: "About",
        askUs: {
          title: "Contact Us",
          getInTouch:
            "Get in touch! Feel free to contact us, and we will get back to you as soon as possible.",
          imageAlt: "Get in touch",
        },
        welcome: "Welcome",
        services: {
          title: "What is Our Services?",
          description:
            "An integrated services system for government transactions via the Internet Covers the full spectrum of application processes at the Ministry of Labour, passports, company establishment services and more. It aims to provide individuals and companies with distinguished government relations management solutions that bring together... Between a personal touch within a solid institutional environment. The company has a high commitment to excellenceEffectiveness and efficiency in providing services to customers throughout the Emirates and the region",
        },
        carousel: {
          emiratesId: "Emirates ID Services",
          emiratesIdDescription:
            "The Emirates ID card is an identification card issued by the Emirates Identity Authority (EIA) (EIDA) that all UAE citizens & residents are required to have",
          ded: "Economics Department services",
          dedDescription:
            "The Department of Economy and Tourism Dubai is a trusted government transaction center delivering premier services. Our services facilitate business",
          tawjeeh: "Business Man Services",
          tawjeehDescription:
            "Establishment of companies and all licenses and commercial activities, as well as assistance in selecting the appropriate location and activity that suits businessmen and investors",
        },
        cards: {
          transactions: {
            title: "Company Transactions",
            items: [
              "Company Establishment",
              "Department of Economic Transactions",
              "Civil Defense Transactions",
              "Municipality Transactions",
              "Chamber of Commerce Transactions",
              "Open Bank Accounts for Companies",
            ],
          },
          ministryTransactions: {
            title: "Ministry of Labor",
            items: [
              "Ministry of Labor Transactions",
              "Ministry of Justice Transactions",
              "Traffic Department Transactions",
              "Medical Examination Transactions",
            ],
          },
          passportTransactions: {
            title: "Passport & ID Transactions",
            items: [
              "Passport Transactions",
              "Emirates ID Transactions",
              "Family Sponsorship & Recruitment Transactions",
            ],
          },
          visas: {
            title: "Visas",
            items: ["Tourist", "Visit", "Recreational"],
          },
        },
        aboutSection: {
          whoWeAreTitle: "Who we are?",
          aboutDescription:
            "Transaction Follow-up Services Company is a company specialized in facilitating and managing business and government services.It acts as an expert intermediary between the private sector and the government,Which helps in establishing and developing business smoothly.We provide integrated solutions to manage all government requirements and regulatory conditions, This allows clients to focus on growing their business, while we take care of dealing with government procedures",
          aboutImage1Alt: "see the opportunity in every challenge",
          aboutImage2Alt: "finding creative solutions",
          aboutImage3Alt: "building trust-based relationships",
          aboutImage4Alt: "results",
          whatWeDoTitle: "What we do?",
          whatWeDoDescription: `We help clients establish their new businesses quickly and easily, by following up on all required permits and licenses
We provide comprehensive follow-up solutions for government services, such as renewing licenses and updating records.
 We act as a liaison between business and government, ensuring that all regulatory requirements are met smoothly and efficiently
 We provide expert advice to clients to ensure compliance with required government and regulatory standards
We are here to make establishing a business and dealing with government agencies easier and more efficient`,
          whereWeAreTitle: "Where we are located?",
        },
        validation: {
          nameRequired: "Full name is required",
          nameTooShort: "Full name is too short",
          nameTooLong: "Full name is too long",
          emailRequired: "Email is required",
          emailInvalid: "Email is not valid",
          phoneRequired: "Phone is required",
          phoneInvalid: "Phone number is not valid",
          messageRequired: "Please write a message so that we can help you",
          messageTooShort: "Your message is too short",
        },
        form: {
          fullNamePlaceholder: "Full Name",
          phonePlaceholder: "Phone Number",
          emailPlaceholder: "Email",
          messagePlaceholder: "Your Message",
          sendButtonText: "Send",
        },
        notFound: {
          message:
            "The internet is not broken, but we can't find what you're looking for.",
          homeLink: "Return to Home",
        },
        footer: {
          brand: "Elkasaby Services",
          location: "Al Maktoum Rd - Fujairah City Center - Fujairah",
          home: "Home",
          about: "About",
          contact: "Contact",
          allRightsReserved: "All Rights Reserved",
        },
      },
    },
    ar: {
      translation: {
        brand: "القصبي لخدمات متابعة المعاملات",
        home: "الرئيسية",
        about: "من نحن",
        contact: "تواصل معنا",
        askUs: {
          title: "تواصل معنا",
          getInTouch:
            "تواصل معنا! لا تتردد في الاتصال بنا وسنعود إليك في أقرب وقت ممكن.",
          imageAlt: "تواصل معنا",
        },
        welcome: "مرحبا",
        services: {
          title: "ما هي خدماتنا؟",
          description: `نظام خدمات متكامل للمعاملات الحكوميه عبر الإنترنت 
يغطي الطيف الكامل من عمليات تقديم الطلبات في وزارة العمل والجوازات وخدمات تاسيس الشركات وأكثر. 
يهدف إلى تزويد الأفراد والشركات بحلول إدارة علاقات حكومية متميزة تجمع 
بين لمسة شخصية ضمن بيئة مؤسسية متينة. تتمتع الشركة بالتزام عالٍ بالتميز
 والفعالية والكفاءة في تقديم الخدمات للعملاء في جميع أنحاء الإمارات والمنطقة`,
        },
        carousel: {
          emiratesId: "خدمات الهوية الإماراتية",
          emiratesIdDescription:
            "بطاقة الهوية الإماراتية هي بطاقة تعريفية تصدرها هيئة الإمارات للهوية (EIA) (EIDA) ويجب أن يمتلكها جميع المواطنين والمقيمين في الإمارات",
          ded: "خدمات دائرة الاقتصاد",
          dedDescription:
            "تعتبر دائرة الاقتصاد والسياحة في دبي مركز معاملات حكومي موثوق يقدم أفضل الخدمات. خدماتنا تسهل الأعمال",
          tawjeeh: "خدمات رجال الاعمال",
          tawjeehDescription:
            "تاسيس الشركات و جميع الرخص والانشطة التجارية و المساعدة في اختيار المكان المناسب والنشاط المناسب الذي يتلائم مع رجال الأعمال و المستثمرين",
        },
        cards: {
          transactions: {
            title: "المعاملات التجارية",
            items: [
              "تأسيس الشركات",
              "معاملات الدائرة الاقتصادية",
              "معاملات الدفاع المدني",
              "معاملات البلدية",
              "معاملات غرفة التجارة",
              "فتح حسابات بنكية للشركات",
            ],
          },
          ministryTransactions: {
            title: " وزارة العمل",
            items: [
              "معاملات وزارة العدل",
              "معاملات المرور",
              "معاملات الفحص الطبي",
            ],
          },
          passportTransactions: {
            title: "معاملات الجوازات والهوية",
            items: [
              "معاملات الجوازات",
              "معاملات الهوية الإماراتية",
              "معاملات الاستقدام والكفالة العائلية",
            ],
          },
          visas: {
            title: "التأشيرات",
            items: ["سياحية", "زيارة", "ترفيهية"],
          },
        },
        aboutSection: {
          whoWeAreTitle: "من نحن؟",
          aboutDescription:
            "شركة لإدارة الأعمال والخدمات الحكومية هي خبيرة في الربط بين الحكومة وتأسيس الأعمال. مع خبرة مشتركة تبلغ 21 عامًا في الإمارات العربية المتحدة، قمنا بتسهيل إنشاء العديد من الشركات العالمية متعددة الجنسيات وإدارة جميع احتياجاتها الحكومية. مهمتنا هي تخفيف عبء العمل التجاري من خلال تقديم خدمات ممتازة تضع راحة عملائنا في المقام الأول. وبفضل عمق خبرتنا الصناعية والوظيفية، نحن لا نساعد عملائنا على دخول السوق الإماراتي بثقة وحسب، بل نعمل أيضًا على بناء قدراتهم المستقبلية. مع معرفتنا وخبرتنا والبصيرة المحلية والشغف، نستطيع معالجة التحديات الحكومية التي لا يستطيع أحد غيرنا معالجتها.",
          aboutImage1Alt: "رؤية الفرصة في كل تحد",
          aboutImage2Alt: "إيجاد حلول إبداعية",
          aboutImage3Alt: "بناء علاقات قائمة على الثقة",
          aboutImage4Alt: "النتائج",
          whatWeDoTitle: "ماذا نفعل؟",
          whatWeDoDescription: `نساعد العملاء على تأسيس أعمالهم الجديدة بسرعة وسهولة، من خلال متابعة جميع التصاريح والتراخيص المطلوبة
نوفر حلول متابعة شاملة للخدمات الحكومية، مثل تجديد التراخيص وتحديث السجلات.
 نعمل كحلقة وصل بين الأعمال والحكومة، مما يضمن تلبية جميع المتطلبات التنظيمية بشكل سلس وفعال
 نقدم المشورة المتخصصة للعملاء لضمان الامتثال للمعايير الحكومية والتنظيمية المطلوبة
نحن هنا لنجعل تأسيس الأعمال والتعامل مع الجهات الحكومية أكثر سهولة وكفاءة`,
          whereWeAreTitle: "أين موقعنا؟",
        },
        validation: {
          nameRequired: "الاسم الكامل مطلوب",
          nameTooShort: "الاسم الكامل قصير جداً",
          nameTooLong: "الاسم الكامل طويل جداً",
          emailRequired: "البريد الإلكتروني مطلوب",
          emailInvalid: "البريد الإلكتروني غير صالح",
          phoneRequired: "الهاتف مطلوب",
          phoneInvalid: "رقم الهاتف غير صالح",
          messageRequired: "يرجى كتابة رسالة حتى نتمكن من مساعدتك",
          messageTooShort: "رسالتك قصيرة جداً",
        },
        form: {
          fullNamePlaceholder: "الاسم الكامل",
          phonePlaceholder: "رقم الهاتف",
          emailPlaceholder: "البريد الإلكتروني",
          messagePlaceholder: "رسالتك",
          sendButtonText: "إرسال",
        },
        notFound: {
          message: "لم ينقطع الاتصال، لكن لا يمكننا العثور على ما تبحث عنه.",
          homeLink: "العودة إلى الصفحة الرئيسية",
        },
        footer: {
          brand: "القصبي لخدمات متابعة المعاملات",
          location: `شارع المكتوم ' مركز الفجيرة التجاري ' الفجيرة`,
          home: "الرئيسية",
          about: "من نحن",
          contact: "تواصل معنا",
          allRightsReserved: "جميع الحقوق محفوظة",
        },
      },
    },
  },
  lng: language,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
});

export default i18n;
