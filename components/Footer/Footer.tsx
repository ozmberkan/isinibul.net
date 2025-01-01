import Image from "next/image";
import Logo from "@/assets/logo.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 mt-12">
      <div className="mx-auto w-full border-t p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image alt="" src={Logo} width={200} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Biz Kimiz
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                <li className="mb-4">
                  <Link href="/hakkimizda" className="hover:underline">
                    Hakkımızda
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Rehber
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                <li className="mb-4">
                  <Link href="/rehber" className="hover:underline">
                    CV Rehberi
                  </Link>
                </li>
                <li>
                  <Link href="/rehber" className="hover:underline">
                    Rehbere göz at
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Yasal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
                <li className="mb-4">
                  <Link href="/rehber" className="hover:underline">
                    Çerez Politikası
                  </Link>
                </li>
                <li>
                  <Link href="/rehber" className="hover:underline">
                    Gizlilik Politikası
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <Link href="/" className="hover:underline text-sm">
              İşinibul.net™
            </Link>
            . Tüm hakları saklıdır.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
