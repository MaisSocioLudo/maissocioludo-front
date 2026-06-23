export default function DownloadComponent() {
  return (
    <section className="w-full rounded-[24px] border border-zinc-200 bg-white p-5 text-center shadow-sm sm:rounded-[32px] sm:p-8">
      <h1 className="text-2xl font-black leading-tight text-zinc-900 sm:text-3xl">
        Download do SocioLudo Digital
      </h1>

      <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-zinc-600">
        Se o download não começar automaticamente, use o botão abaixo para
        baixar o arquivo novamente.
      </p>

      <a
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[var(--color-azul)] px-5 py-3 text-sm font-black uppercase tracking-wide text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#01599a] sm:w-auto"
        href="../SocioLudo Digital.rar"
      >
        Baixar SocioLudo Digital
      </a>
    </section>
  );
}
