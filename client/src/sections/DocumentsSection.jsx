export default function DocumentsSection() {
    return (
        <section className="bg-slate-50 py-24">

            <div className="max-w-7xl mx-auto px-4">

                <h2 className="text-4xl font-bold text-center mb-12">
                    প্রয়োজনীয় কাগজপত্র
                </h2>

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="bg-white p-8 rounded-xl shadow">

                        <h3 className="font-bold text-xl mb-4">
                            মুসলিম বিবাহ নিবন্ধন
                        </h3>

                        <ul className="space-y-2">
                            <li>
                                বিবাহের ক্ষেত্রে ছেলের বয়স ২১ বছর </li>
                            <li>কনের বয়স 18 বছর</li>
                            <li>  সর্বনিম্ন দুই কপি ছবি</li>
                            <li> আইডি কার্ডের ফটোকপি অথবা জন্ম নিবন্ধন অথবা মেট্রিক ইন্টার পরীক্ষার সার্টিফিকেটের কাগজ </li>
                            সঙ্গে নিয়ে আসবেন
                        </ul>

                    </div>

                    <div className="bg-white p-8 rounded-xl shadow">

                        <h3 className="font-bold text-xl mb-4">
                            হিন্দু বিবাহ নিবন্ধন
                        </h3>

                        <ul className="space-y-2">
                            <li> ছয় কপি ছবি  </li>
                            <li>আইডি কার্ড এবং জন্ম নিবন্ধনের কপি</li>
                            <li>চারজন হিন্দু সাক্ষী</li>
                            <li></li>
                        </ul>

                    </div>

                </div>

            </div>

        </section>
    );
}
