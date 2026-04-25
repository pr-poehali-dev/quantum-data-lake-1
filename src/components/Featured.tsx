export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/19bbde39-7aee-401c-a615-828b0f5fca50/files/5530b8a9-d1ce-49e8-aa7a-c3682586bcd6.jpg"
          alt="Portrait photography by Sergei Zhoydik"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Авторский взгляд</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Я не просто нажимаю кнопку — я ищу свет, ловлю момент и передаю то, что слова передать не могут.
          Каждая съёмка уникальна.
        </p>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Связаться
        </button>
      </div>
    </div>
  );
}