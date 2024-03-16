//TODO
//imageSrc 수정 

import BasicLayout from "../layouts/BasicLayout";
const callouts = [
    {
        name: 'City',
        description: 'bridges',
        imageSrc: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg',
        imageAlt: '배경1',
        href: '#',
    },
    {
        name: 'Self',
        description: 'rain',
        imageSrc: 'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_640.jpg',
        imageAlt: '배경2',
        href: '#',
    },
    {
        name: 'Travel',
        description: 'museum',
        imageSrc: 'https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_640.jpg',
        imageAlt: '배경3',
        href: '#',
    },
]
const MyProfilePage = () => {
    return (
        <BasicLayout>
            <div className=" min-h-screen  py-12">
                <div className="max-w-5xl mx-auto bg-slate-300 rounded-lg overflow-hidden shadow-md">
                    <div className="px-6 py-6">
                        <div className="flex items-end">
                            <img className="h-24 w-24 rounded-full object-cover" src="https://cdn.pixabay.com/photo/2015/07/27/20/16/book-863418_640.jpg" alt="프로필_이미지_설명" />
                            <div className="flex flex-col items-start">
                                <strong className="ml-3 text-xl text-gray-800">user</strong>
                                <span className="ml-3 text-sm text-gray-600">example@naver.com</span>
                            </div>

                            {/* <button className="m-1 bg-slate-400 hover:bg-slate-500 p-2 rounded-md shadow-md text-color">modify</button> */}

                        </div>
                    </div>
                </div>
                <main>
                    <section >
                        <div className="">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                                    <h2 className="text-2xl font-bold text-gray-900">BookMark</h2>

                                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                                        {callouts.map((callout) => (
                                            <div key={callout.name} className="group relative">
                                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                                    <img
                                                        src={callout.imageSrc}
                                                        alt={callout.imageAlt}
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <h3 className="mt-6 text-sm text-gray-500">
                                                    <a href={callout.href}>
                                                        <span className="absolute inset-0" />
                                                        {callout.name}
                                                    </a>
                                                </h3>
                                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section >
                        <div className="">
                            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                                    <h2 className="text-2xl font-bold text-gray-900">Recommand</h2>

                                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                                        {callouts.map((callout) => (
                                            <div key={callout.name} className="group relative">
                                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                                    <img
                                                        src={callout.imageSrc}
                                                        alt={callout.imageAlt}
                                                        className="h-full w-full object-cover object-center"
                                                    />
                                                </div>
                                                <h3 className="mt-6 text-sm text-gray-500">
                                                    <a href={callout.href}>
                                                        <span className="absolute inset-0" />
                                                        {callout.name}
                                                    </a>
                                                </h3>
                                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

        </BasicLayout>
    );
}

export default MyProfilePage;