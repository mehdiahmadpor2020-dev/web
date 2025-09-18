---
source-hash: 46a1886051c86f82be8c7760e97112a93aa73290d7f57d40189238af7d9e4f39
sidebar_position: 4
title:  Навігація для мопеда
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';
import InfoAndroidOnly from '@site/src/components/_infoAndroidOnly.mdx';



## Огляд {#overview}

*Навігація для мопеда* дозволяє водіям будувати оптимальний (найшвидший) маршрут, враховуючи особливості керування таким транспортним засобом, як мопед або скутер. Процес маршрутизації враховує різні фактори для безпечного, комфортного та законного пересування дорогами або велосипедними доріжками.

:::note
За замовчуванням *профіль Мопед* вимкнено. Щоб використовувати цей профіль для маршрутизації, вам потрібно увімкнути його в *<Translate android="true" ids="shared_string_menu,shared_string_settings,application_profiles"/>*.
:::


## Параметри маршруту - Мопед {#route-parameters---moped}

*Навігацію для мопеда* можна налаштувати відповідно до ваших потреб у розділі [Параметри маршруту](../guidance/navigation-settings.md#route-parameters) налаштувань навігації.  

Налаштування маршрутизації для мопеда дуже прості й складаються лише з кількох опцій.

<Tabs groupId="operating-systems" queryString="current-os">

<TabItem value="android" label="Android">  

![Налаштування навігації для мопеда Android](@site/static/img/navigation/routing/moped_routing_andr.png)  

</TabItem>

<TabItem value="ios" label="iOS">

![Налаштування навігації для мопеда iOS](@site/static/img/navigation/routing/moped_routing_ios.png)  

</TabItem>

</Tabs>

| Параметр | Опис | Примітка |
|:------------|:---------------|:---------------|
| *<Translate android="true" ids="impassable_road"/>* |  <details><summary> Виберіть дороги, яких ви хочете уникати під час навігації.  </summary>![Уникати доріг Android](@site/static/img/navigation/routing/avoid_moped_android.png) </details>  | Ви можете [вибрати дорогу на мапі](../../map/map-context-menu/#avoid-road) або вибрати тип(и) доріг зі списку:  <ul><li>[<Translate android="true" ids="routing_attr_avoid_ferries_name"/>](https://wiki.openstreetmap.org/wiki/Ferries) (тип водного транспорту, що перевозить транспортні засоби через водойми)</li></ul>|
| *<Translate android="true" ids="routing_attr_allow_private_name"/>* |  Обмеження приватного доступу будуть ігноруватися при розрахунку маршруту.  | Тег *[private](https://wiki.openstreetmap.org/wiki/Key:access)* використовується в OSM для опису обмежень на використання автомагістралей та інших транспортних шляхів, а також будівель, входів, об'єктів благоустрою та об'єктів дозвілля.   |