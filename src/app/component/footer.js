export default function Footer() {
  return (
    <footer className="text-gray-600 body-font ">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          <span className="ml-3 text-l">YUNA Portfolio</span>
        </a>
        <p className="text-sm text-gray-500  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Yuna Moon
        </p>
      </div>
    </footer>
  );
}
