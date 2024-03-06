export default function Introduce({ title, image, description }) {
    return (
        <section style={{ whiteSpace: 'pre-line' }} className="flex items-center justify-center gap-4 p-4 ">
            <img className="w-64 h-64 rounded-md mr-11" src={image} alt={title} />
            <article className="w-64">
                <h2 className="font-bold text-2xl font-serif mb-2">{title}</h2>
                <p className="text-gray-600">{description}</p>
            </article>
        </section>
    );
}