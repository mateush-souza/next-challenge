"use client";
import Image from 'next/image'

import logo from '@/image/logo.png'

import facebookIcon from '@/image/footer/facebook.svg'
import instagramIcon from '@/image/footer/instagram.svg'
import linkedinIcon from '@/image/footer/linkedin.svg'
import youtubeIcon from '@/image/footer/youtube.svg'
import twitterIcon from '@/image/footer/twitter.svg'
import tiktokIcon from '@/image/footer/tiktok.svg'
import appleIcon from '@/image/footer/btn-apple.png'
import googleIcon from '@/image/footer/btn-google.png'

const Footer = () => {
  const footerData = {
    itemsInst: [
      { item: "A Porto" },
      { item: "Marca Porto" },
      { item: "Instituto Porto" },
      { item: "Parceiros" },
      { item: "Teatro Porto" },
      { item: "Notícias e Imprensa" },
      { item: "Patrocínios" },
    ],
    itemsBlog: [
      { item: "Casa" },
      { item: "Mobilidade" },
      { item: "Finanças" },
      { item: "Vida e Saúde" },
      { item: "Viagem" },
      { item: "Tecnologia" },
      { item: "Negócios" },
      { item: "Sobre a Porto" },
    ],
    itemsForYou: [
      { item: "Portal do Cliente" },
      { item: "Encontre um Corretor" },
    ],
    iconsSocial: [
      { src: facebookIcon, alt: "Ícone do Facebook" },
      { src: instagramIcon, alt: "Ícone do Instagram" },
      { src: linkedinIcon, alt: "Ícone do LinkedIn" },
      { src: youtubeIcon, alt: "Ícone do Youtube" },
      { src: twitterIcon, alt: "Ícone do Twitter" },
      { src: tiktokIcon, alt: "Ícone do TikTok" },
    ],
    dowload: [
      { src: appleIcon, alt: "Baixar app da Porto na Apple Store" },
      { src: googleIcon, alt: "Baixar app da Porto na Google Play" },
    ],
  };

  return (
    <div className="bg-blue-700 text-white py-6 min-h-[400px] flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center p-6">
        
        <div className="flex flex-col">
          <ul className="font-bold">Institucional</ul>
          {footerData.itemsInst.map((itemObj, i) => (
            <li key={i} className="font-normal">{itemObj.item}</li>
          ))}
        </div>

        <div className="flex flex-col">
          <ul className="font-bold">Blog Porto</ul>
          {footerData.itemsBlog.map((itemObj, i) => (
            <li key={i} className="font-normal">{itemObj.item}</li>
          ))}
        </div>

        <div className="flex flex-col">
          <ul className="font-bold">Porto e Você</ul>
          {footerData.itemsForYou.map((itemObj, i) => (
            <li key={i} className="font-normal">{itemObj.item}</li>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <Image src={logo} alt="Logo AutoCheckup" className="mb-4" />
          <p>Acompanhe a Porto nas redes sociais</p>
          <div className="flex space-x-4 mt-2">
            {footerData.iconsSocial.map((itemObj) => (
              <Image key={itemObj.alt} src={itemObj.src} alt={itemObj.alt} />
            ))}
          </div>
          <div className="mt-8">
            <p>Baixe o app da Porto</p>
            <div className="flex space-x-4">
              {footerData.dowload.map((itemObj) => (
                <Image key={itemObj.alt} src={itemObj.src} alt={itemObj.alt} className="cursor-pointer" />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start mt-6 lg:mt-0 lg:col-span-1 border-t border-white pt-4">
          <p className="mr-10">Privacidade</p>
          <p className="mr-10">Procon</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
