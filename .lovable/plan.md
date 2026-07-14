
## نظرة عامة
موقع كامل لشركة **Cairo Sky** لتصدير المنتجات الزراعية المصرية، بنفس هيكل وأقسام موقع genex-corp.com مع تغيير الاسم/الهوية إلى Cairo Sky.

## الصفحات (TanStack Router routes)
- `/` — الرئيسية: Hero + About + Featured Products + Why Us + Categories + Stats + Partners + CTA
- `/about` — من نحن (رسالة، رؤية، قيم، شهادات)
- `/products` — كل المنتجات
- `/products/fruits` — فواكه
- `/products/vegetables` — خضروات
- `/products/canned` — معلبات وبقوليات
- `/products/dates` — تمور
- `/products/juices` — عصائر
- `/products/frozen` — مجمدات
- `/products/seafood` — مأكولات بحرية مجمدة
- `/product/$slug` — صفحة تفاصيل منتج ديناميكية (برتقال، فراولة، عنب، مانجو، رمان، جوافة، طماطم، فلفل، خيار، بطيخ، ليمون، خوخ)
- `/contact` — تواصل معنا + نموذج طلب عرض سعر

## المكونات المشتركة
- `Header` — شريط علوي بالبيانات (هاتف/إيميل/فروع) + Navbar بشعار Cairo Sky وروابط تنقل + زر Contact
- `Footer` — روابط، تواصل، سوشيال، حقوق ملكية Cairo Sky
- `ProductCard`, `CategoryCard`, `FeatureCard`, `StatCard`, `PartnersMarquee`

## الهوية البصرية
- **الاسم:** Cairo Sky (شعار نصي أنيق باللونين الأخضر والذهبي، بديل عن شعار GENEX)
- **الألوان:** أخضر زراعي أساسي + ذهبي/برتقالي كلون مميز، خلفيات فاتحة نظيفة — كلها كـ semantic tokens في `src/styles.css` (oklch)
- **الخط:** Inter للنص + Playfair Display للعناوين (عبر `<link>` في `__root.tsx`)
- **الصور:** نستخدم صور المنتجات الفعلية من موقع genex-corp.com عبر URLs مباشرة (فواكه/خضروات/فئات) — لا حاجة لتوليد صور
- **الفروع/التواصل:** نستبدل بيانات GENEX ببيانات Cairo Sky (القاهرة، مصر) — أرقام وإيميل placeholder يمكن للمستخدم تعديلها لاحقاً

## SEO & Head
- كل route لها `head()` مستقلة بـ title/description/og:title/og:description و canonical نسبي
- `__root.tsx`: تحديث title/description الافتراضية لـ Cairo Sky، إضافة `og:site_name`، وJSON-LD Organization
- Product routes: JSON-LD `Product`

## تفاصيل تقنية
- ملفات الروتس المسطحة: `products.tsx` (layout مع `<Outlet/>`) + `products.index.tsx` + `products.fruits.tsx` … إلخ
- `product.$slug.tsx` مع بيانات المنتجات في `src/data/products.ts`
- بيانات الفئات في `src/data/categories.ts`
- بدون backend — نموذج التواصل client-side فقط (mailto: أو toast تأكيد)
- استبدال `src/routes/index.tsx` (placeholder) بالصفحة الرئيسية

## الملاحظات
- المحتوى النصي معاد صياغته لصالح Cairo Sky (نفس المعنى، ليس نسخ حرفي)
- شعارات "الشركاء" placeholder generic (لن ننسخ شعارات أطراف ثالثة)
- بيانات الاتصال placeholder — يخبرني المستخدم بها ليحدّثها
