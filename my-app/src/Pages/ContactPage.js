export default function ContactPage() {
    return (
        <div className="w-full">
            <div className="p-8">
                <section className="mx-auto w-4/5 md:w-2/5">
                    <div className="mr-auto text text-xl">
                        <h1 className="mb-10">Need help?</h1>
                        <div>Please get in touch with us to inquire about our products, seek assistance with any issues, or to place an order.</div>
                    </div>
                </section>
                <section className="mt-5">
                    <div className="mx-auto w-4/5 md:w-2/5">
                        <form>
                            <div>
                                <ul className="grid grid-cols-1 xl:grid-cols-2">
                                    <li className="p-4">
                                        <div className="w-full">
                                            <input name='fname' className="bg-slate-200 p-3 rounded-md w-full" placeholder="First name"></input>
                                        </div>
                                    </li>
                                    <li className="p-4">
                                        <div className="w-full">
                                            <input name='lname' className="bg-slate-200 p-3 rounded-md w-full" placeholder="Last name"></input>
                                        </div>
                                    </li>
                                    <li className="p-4">
                                        <div className="w-full">
                                            <input name='email' className='bg-slate-200 p-3 rounded-md w-full' type='email' placeholder='Email'></input>
                                        </div>
                                    </li>
                                    <li className="p-4">
                                        <div className="w-full">
                                            <input name='subject' className="bg-slate-200 p-3 rounded-md w-full" placeholder='Subject'></input>
                                        </div>
                                    </li>
                                    <li className="p-4">
                                        <div className="w-full">
                                            <textarea name='comments' className="bg-slate-200 p-3 rounded-md w-full resize-none h-32" placeholder="Please type your inquiry or concerns here. Remember to be as detailed as possible."></textarea>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-4">
                                <div className="w-full">
                                    <button type='submit' className="bg-blue-950 text-white p-2 rounded-md">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}