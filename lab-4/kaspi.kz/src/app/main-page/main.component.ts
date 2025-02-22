import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../product/product.component';
import { ProductInfo } from '../product-info';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {


  productInfoList : ProductInfo[]= [
    {
      name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
      description: `      
      Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность. Этот адаптер совместим с любыми устройствами Apple, оснащенными портом USB-C: смартфон, планшет или смарт-часы.
      
      `,
      photoURL: ['assets/charger.jpg'],
      rating : 4.7,
      link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000'
    },
    {
      name: 'Характеристики Наушники OEM P9 серебристый',
      description: `      
      Типгарнитура
      Видполноразмерные
      Назначениедля любых задач
      Подключениебеспроводное
      Тип акустического оформлениязакрытые
      Частота воспроизведения20-20000 Гц
      Импеданс32.0 Ом
      Чувствительность96.0 дБ
      Вес250.0 г


      `,
      photoURL: ['assets/naush.jpg'],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/oem-p9-serebristyi-116112464/?c=750000000'
    },
    {
      name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
      description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. ',
      photoURL: ['assets/iphon.jpeg'],
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
    },
    {
      name: 'Ноутбук Apple MacBook Air 13 2022 13.6" / 8 Гб / SSD 256 Гб / macOS / MLXW3',
      description: `
      Максимальная частота процессора3400.0 МГц
      ПроцессорApple M2
      Базовая частота процессора2000.0 МГц
      Количество ядер процессора8 ядер
      `,
      photoURL: ['assets/macjpg.jpg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=750000000'
    },
    {
      name: 'Миксер 7Speeds белый',
      description: `      
      Типручной
      Мощность260.0 Вт
      Число скоростей7
      Количество насадок2
      Насадкивенчик для взбивания, крюки для теста
      ТурборежимДа
      Материал корпусапластик
      `,
      photoURL: ['assets/bljpg.jpg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/7speeds-belyi-109891608/?c=750000000'
    },
    {
      name: 'Подставка под запястье Стандарт 150608436 белый',
      description: `
      Основные характеристики
      Типдинамический
      Конструкцияпетличный (клипса)
      Назначениеуниверсальный
      Тип подключениябеспроводной
      Чувствительность36.0 дБ
      РадиосистемаНет
      `
      ,
      photoURL: ['assets/mysh.jpeg'],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/standart-150608436-belyi-129976123/?c=750000000'
    },
    {
      name: 'Вешалка напольная, izox, металл, 110x150 см, черный',
      description: `
Материалполиуретановый эластомер
Цветбелый
Ширина90.0 мм
ДополнительноПодушка для запястья для снятия напряжения с кисти цвет молочный      `,
      photoURL: ['assets/vesh.jpeg'],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/hoco-flash-micro-sd-16gb-101010299/?c=750000000'
    },
    {
      name: 'Планшет Samsung Galaxy Tab A9+ 5G 11 дюйм 8 Гб/128 Гб серебристый',
      description: `      
     
Ширина257.1 мм
Вес480.0 г
            `,
      photoURL: ['assets/pl.jpg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000'
    },
    {
      name: 'DMND спонж скошенный, спонж капля полиуретан 2 шт',
      description: `      
      Спонж для макияжа идеально наносит и растушёвывает косметическое средство, создавая идеальное покрытие. Прекрасно подходит для профессионального макияжа.
      `,
      photoURL: ['assets/tan.jpg'],
      rating: 4.1,
      link: 'https://kaspi.kz/shop/p/dmnd-sponzh-skoshennyi-sponzh-kaplja-poliuretan-2-sht-104557208/?c=750000000'
    },
    {
      name: 'Детское пюре Агуша банан, манго, яблоко, груша 90 г',
      description: `      
      Фруктовое пюре Агуша из яблок, груш, бананов и манго. Гомогенизированное. Создано для детей от 6 месяцев. Возьмите на прогулку вкусный перекус от Агуша! Особенности: 100% натурально, без крахмала, без добавления сахара, готово к употреблению, удобно взять с собой на прогулку.'
      `,
      photoURL: ['assets/agu.jpg'],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/agusha-banan-mango-jabloko-grusha-90-g-101670844/?c=750000000'
    },
  ];

}
