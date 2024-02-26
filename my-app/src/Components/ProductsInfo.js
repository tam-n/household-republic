export default function ProductsInfo({title, text}) {
    return (
        <div className="w-full flex justify-center">
            <div className="p-5 bg-sky-100 rounded-xl m-3 text-center w-3/4">
                <h1 className="my-4 titles text-2xl font-bold">{title}</h1>
                <div className="text text-xl">{text}</div>
            </div>
        </div>
    )
}