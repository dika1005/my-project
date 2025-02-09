const services = [
    {id: '01', title: 'web designer', description: 'Designing user-friendly websites and ensuring optimal user experience'},
    {id: '02', title: 'seo optimization', description: 'Improving search engine rankings through keyword research and on-page optimization'},
    {id: '03', title: 'Ui/Ux designer', description: 'Creating intuitive user interfaces and enhancing user interaction'},
    {id: '04', title: 'digital marketing', description: 'Promoting brands through digital channels, including email, social media, and online advertising'},
    {id: '05', title: 'content creator', description: 'Creating engaging content for various platforms, including blogs, videos, and social media posts'},
    {id: '06', title: 'social media management', description: 'Managing social media accounts, developing strategies, and analyzing performance metrics'}
]

export const Service = () => {

    return (
        <section className="text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/4 pr-8 mb-12 mb:mb-0">
                <h2 className="text-6xl font-extrabold sticky top-20">SERVICES</h2>
                </div>

                <div className="md:w-3/4">
                    {services.map(service =>(
                        <div key={service.id} className="mb-16 flex items-start">
                            <div className="text-gray-300 font-bold text-5xl mr-6">
                                {service.id}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p>{service.description}</p>
                            </div>

                        </div>
                    ))}
                </div>
                </div>

        </section>
    )
}