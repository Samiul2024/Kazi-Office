export default function Gallery() {
    const images = [
        "https://res.cloudinary.com/dejhl0l7a/image/upload/v1783244357/kazi1_hnmrwi.jpg",
        "https://res.cloudinary.com/dejhl0l7a/image/upload/v1783244357/kazi2_utupti.jpg",
        "https://res.cloudinary.com/dejhl0l7a/image/upload/v1783244357/kazi3_tg4akc.jpg",
        "https://res.cloudinary.com/dejhl0l7a/image/upload/q_auto/f_auto/v1782038378/kazi-office_d48qdo.jpg",
        "https://res.cloudinary.com/dejhl0l7a/image/upload/v1783245048/WhatsApp_Image_2026-07-05_at_3.49.12_PM_ldoqmb.jpg",
        "https://res.cloudinary.com/dejhl0l7a/image/upload/v1783245050/WhatsApp_Image_2026-07-05_at_3.49.22_PM_elpqn1.jpg",
    ];

    const video =
        "https://res.cloudinary.com/dejhl0l7a/video/upload/v1783245285/WhatsApp_Video_2026-07-05_at_3.50.12_PM_berrbt.mp4";

    return (
        <section className="py-24">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Office Gallery
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-xl shadow-lg"
                        >
                            <img
                                src={image}
                                alt={`Office ${index + 1}`}
                                loading="lazy"
                                decoding="async"
                                className="w-full aspect-[3/4] object-cover"
                            />
                        </div>
                    ))}

                    {/* Video */}
                    <div className="overflow-hidden rounded-xl shadow-lg">
                        <video
                            src={video}
                            controls
                            muted
                            playsInline
                            preload="metadata"

                            className="w-full aspect-[3/4] object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}