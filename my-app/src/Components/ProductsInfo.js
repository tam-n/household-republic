export default function ProductsInfo({title, text}) {
    return (
        <div className="w-full">
            <div className="p-5 bg-sky-50 rounded-xl m-3 text-center">
                <h1 className="my-4 titles text-2xl font-bold">{title}</h1>
                <div className="text text-xl">{text}</div>
            </div>
        </div>
    )
}