import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Phone, MessageCircle, MapPin } from 'lucide-react';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SEO from '../components/seo/SEO';

const ALL_AREAS = [
  { label: 'Accra to Sekondi', path: '/service-areas/accra-to-sekondi', region: 'Western Region' },
  { label: 'Sekondi to Accra', path: '/service-areas/sekondi-to-accra', region: 'Western Region' },
  { label: 'Accra to Takoradi', path: '/service-areas/accra-to-takoradi', region: 'Western Region' },
  { label: 'Takoradi to Accra', path: '/service-areas/takoradi-to-accra', region: 'Western Region' },
  { label: 'Accra to Tarkwa', path: '/service-areas/accra-to-tarkwa', region: 'Western Region' },
  { label: 'Tarkwa to Accra', path: '/service-areas/tarkwa-to-accra', region: 'Western Region' },
  { label: 'Accra to Bogoso', path: '/service-areas/accra-to-bogoso', region: 'Western Region' },
  { label: 'Bogoso to Accra', path: '/service-areas/bogoso-to-accra', region: 'Western Region' },
  { label: 'Accra to Prestea', path: '/service-areas/accra-to-prestea', region: 'Western Region' },
  { label: 'Prestea to Accra', path: '/service-areas/prestea-to-accra', region: 'Western Region' },
  { label: 'Accra to Agona Nkwanta', path: '/service-areas/accra-to-agona-nkwanta', region: 'Western Region' },
  { label: 'Agona Nkwanta to Accra', path: '/service-areas/agona-nkwanta-to-accra', region: 'Western Region' },
  { label: 'Accra to Elubo', path: '/service-areas/accra-to-elubo', region: 'Western Region' },
  { label: 'Elubo to Accra', path: '/service-areas/elubo-to-accra', region: 'Western Region' },
  { label: 'Accra to Axim', path: '/service-areas/accra-to-axim', region: 'Western Region' },
  { label: 'Axim to Accra', path: '/service-areas/axim-to-accra', region: 'Western Region' },
  { label: 'Accra to Half Assini', path: '/service-areas/accra-to-half-assini', region: 'Western Region' },
  { label: 'Half Assini to Accra', path: '/service-areas/half-assini-to-accra', region: 'Western Region' },
  { label: 'Accra to Shama', path: '/service-areas/accra-to-shama', region: 'Western Region' },
  { label: 'Shama to Accra', path: '/service-areas/shama-to-accra', region: 'Western Region' },
  { label: 'Accra to Mpohor', path: '/service-areas/accra-to-mpohor', region: 'Western Region' },
  { label: 'Mpohor to Accra', path: '/service-areas/mpohor-to-accra', region: 'Western Region' },
  { label: 'Accra to Wassa Akropong', path: '/service-areas/accra-to-wassa-akropong', region: 'Western Region' },
  { label: 'Wassa Akropong to Accra', path: '/service-areas/wassa-akropong-to-accra', region: 'Western Region' },
  { label: 'Accra to Daboase', path: '/service-areas/accra-to-daboase', region: 'Western Region' },
  { label: 'Daboase to Accra', path: '/service-areas/daboase-to-accra', region: 'Western Region' },
  { label: 'Accra to Enchi', path: '/service-areas/accra-to-enchi', region: 'Western North Region' },
  { label: 'Enchi to Accra', path: '/service-areas/enchi-to-accra', region: 'Western North Region' },
  { label: 'Accra to Bawdie', path: '/service-areas/accra-to-bawdie', region: 'Western Region' },
  { label: 'Bawdie to Accra', path: '/service-areas/bawdie-to-accra', region: 'Western Region' },
  { label: 'Accra to Samreboi', path: '/service-areas/accra-to-samreboi', region: 'Western Region' },
  { label: 'Samreboi to Accra', path: '/service-areas/samreboi-to-accra', region: 'Western Region' },
  { label: 'Accra to Sefwi Wiawso', path: '/service-areas/accra-to-sefwi-wiawso', region: 'Western North Region' },
  { label: 'Sefwi Wiawso to Accra', path: '/service-areas/sefwi-wiawso-to-accra', region: 'Western North Region' },
  { label: 'Accra to Bibiani', path: '/service-areas/accra-to-bibiani', region: 'Western North Region' },
  { label: 'Bibiani to Accra', path: '/service-areas/bibiani-to-accra', region: 'Western North Region' },
  { label: 'Accra to Juaboso', path: '/service-areas/accra-to-juaboso', region: 'Western North Region' },
  { label: 'Juaboso to Accra', path: '/service-areas/juaboso-to-accra', region: 'Western North Region' },
  { label: 'Accra to Bodi', path: '/service-areas/accra-to-bodi', region: 'Western North Region' },
  { label: 'Bodi to Accra', path: '/service-areas/bodi-to-accra', region: 'Western North Region' },
  { label: 'Accra to Asankragwa', path: '/service-areas/accra-to-asankragwa', region: 'Western Region' },
  { label: 'Asankragwa to Accra', path: '/service-areas/asankragwa-to-accra', region: 'Western Region' },
  { label: 'Accra to Dadieso', path: '/service-areas/accra-to-dadieso', region: 'Western North Region' },
  { label: 'Dadieso to Accra', path: '/service-areas/dadieso-to-accra', region: 'Western North Region' },
  { label: 'Accra to Sefwi Bekwai', path: '/service-areas/accra-to-sefwi-bekwai', region: 'Western North Region' },
  { label: 'Sefwi Bekwai to Accra', path: '/service-areas/sefwi-bekwai-to-accra', region: 'Western North Region' },
  { label: 'Accra to Akontombra', path: '/service-areas/accra-to-akontombra', region: 'Western North Region' },
  { label: 'Akontombra to Accra', path: '/service-areas/akontombra-to-accra', region: 'Western North Region' },
  { label: 'Accra to Cape Coast', path: '/service-areas/accra-to-cape-coast', region: 'Central Region' },
  { label: 'Cape Coast to Accra', path: '/service-areas/cape-coast-to-accra', region: 'Central Region' },
  { label: 'Accra to Elmina', path: '/service-areas/accra-to-elmina', region: 'Central Region' },
  { label: 'Elmina to Accra', path: '/service-areas/elmina-to-accra', region: 'Central Region' },
  { label: 'Accra to Mankessim', path: '/service-areas/accra-to-mankessim', region: 'Central Region' },
  { label: 'Mankessim to Accra', path: '/service-areas/mankessim-to-accra', region: 'Central Region' },
  { label: 'Accra to Winneba', path: '/service-areas/accra-to-winneba', region: 'Central Region' },
  { label: 'Winneba to Accra', path: '/service-areas/winneba-to-accra', region: 'Central Region' },
  { label: 'Accra to Apam', path: '/service-areas/accra-to-apam', region: 'Central Region' },
  { label: 'Apam to Accra', path: '/service-areas/apam-to-accra', region: 'Central Region' },
  { label: 'Accra', path: '/service-areas/accra', region: 'Greater Accra Region' },
  { label: 'Tema', path: '/service-areas/tema', region: 'Greater Accra Region' },
  { label: 'Ashaiman', path: '/service-areas/ashaiman', region: 'Greater Accra Region' },
  { label: 'Teshie', path: '/service-areas/teshie', region: 'Greater Accra Region' },
  { label: 'Nungua', path: '/service-areas/nungua', region: 'Greater Accra Region' },
  { label: 'Labadi', path: '/service-areas/labadi', region: 'Greater Accra Region' },
  { label: 'Osu', path: '/service-areas/osu', region: 'Greater Accra Region' },
  { label: 'Dansoman', path: '/service-areas/dansoman', region: 'Greater Accra Region' },
  { label: 'Kaneshie', path: '/service-areas/kaneshie', region: 'Greater Accra Region' },
  { label: 'Achimota', path: '/service-areas/achimota', region: 'Greater Accra Region' },
  { label: 'Madina', path: '/service-areas/madina', region: 'Greater Accra Region' },
  { label: 'Adenta', path: '/service-areas/adenta', region: 'Greater Accra Region' },
  { label: 'East Legon', path: '/service-areas/east-legon', region: 'Greater Accra Region' },
  { label: 'Spintex', path: '/service-areas/spintex', region: 'Greater Accra Region' },
  { label: 'La', path: '/service-areas/la', region: 'Greater Accra Region' },
  { label: 'Airport Residential', path: '/service-areas/airport-residential', region: 'Greater Accra Region' },
  { label: 'Dzorwulu', path: '/service-areas/dzorwulu', region: 'Greater Accra Region' },
  { label: 'Tesano', path: '/service-areas/tesano', region: 'Greater Accra Region' },
  { label: 'Abeka', path: '/service-areas/abeka', region: 'Greater Accra Region' },
  { label: 'Kwashieman', path: '/service-areas/kwashieman', region: 'Greater Accra Region' },
  { label: 'Weija-Gbawe', path: '/service-areas/weija-gbawe', region: 'Greater Accra Region' },
  { label: 'Kasoa', path: '/service-areas/kasoa', region: 'Greater Accra Region' },
  { label: 'Prampram', path: '/service-areas/prampram', region: 'Greater Accra Region' },
  { label: 'Kpone', path: '/service-areas/kpone', region: 'Greater Accra Region' },
  { label: 'Dawhenya', path: '/service-areas/dawhenya', region: 'Greater Accra Region' },
  { label: 'Amasaman', path: '/service-areas/amasaman', region: 'Greater Accra Region' },
  { label: 'Ayawaso', path: '/service-areas/ayawaso', region: 'Greater Accra Region' },
  { label: 'Burma Camp', path: '/service-areas/burma-camp', region: 'Greater Accra Region' },
  { label: 'Circle', path: '/service-areas/circle', region: 'Greater Accra Region' },
  { label: 'Dodowa', path: '/service-areas/dodowa', region: 'Greater Accra Region' },
  { label: 'Korle Klottey', path: '/service-areas/korle-klottey', region: 'Greater Accra Region' },
  { label: 'Lakeside', path: '/service-areas/lakeside', region: 'Greater Accra Region' },
  { label: 'Nima', path: '/service-areas/nima', region: 'Greater Accra Region' },
  { label: 'Ningo-Prampram', path: '/service-areas/ningo-prampram', region: 'Greater Accra Region' },
  { label: 'Pokuase', path: '/service-areas/pokuase', region: 'Greater Accra Region' },
  { label: 'Accra to Koforidua', path: '/service-areas/accra-to-koforidua', region: 'Eastern Region' },
  { label: 'Koforidua to Accra', path: '/service-areas/koforidua-to-accra', region: 'Eastern Region' },
  { label: 'Accra to Nkawkaw', path: '/service-areas/accra-to-nkawkaw', region: 'Eastern Region' },
  { label: 'Nkawkaw to Accra', path: '/service-areas/nkawkaw-to-accra', region: 'Eastern Region' },
  { label: 'Accra to Suhum', path: '/service-areas/accra-to-suhum', region: 'Eastern Region' },
  { label: 'Suhum to Accra', path: '/service-areas/suhum-to-accra', region: 'Eastern Region' },
  { label: 'Accra to Nsawam', path: '/service-areas/accra-to-nsawam', region: 'Eastern Region' },
  { label: 'Nsawam to Accra', path: '/service-areas/nsawam-to-accra', region: 'Eastern Region' },
  { label: 'Accra to Aburi', path: '/service-areas/accra-to-aburi', region: 'Eastern Region' },
  { label: 'Aburi to Accra', path: '/service-areas/aburi-to-accra', region: 'Eastern Region' },
  { label: 'Accra to Akropong', path: '/service-areas/accra-to-akropong', region: 'Eastern Region' },
  { label: 'Akropong to Accra', path: '/service-areas/akropong-to-accra', region: 'Eastern Region' },
  { label: 'Accra to Somanya', path: '/service-areas/accra-to-somanya', region: 'Eastern Region' },
  { label: 'Somanya to Accra', path: '/service-areas/somanya-to-accra', region: 'Eastern Region' },
  { label: 'Accra to Odumase-Krobo', path: '/service-areas/accra-to-odumase-krobo', region: 'Eastern Region' },
  { label: 'Odumase-Krobo to Accra', path: '/service-areas/odumase-krobo-to-accra', region: 'Eastern Region' },
  { label: 'Accra to Asamankese', path: '/service-areas/accra-to-asamankese', region: 'Eastern Region' },
  { label: 'Asamankese to Accra', path: '/service-areas/asamankese-to-accra', region: 'Eastern Region' },
  { label: 'Accra to Akyem Oda', path: '/service-areas/accra-to-akyem-oda', region: 'Eastern Region' },
  { label: 'Akyem Oda to Accra', path: '/service-areas/akyem-oda-to-accra', region: 'Eastern Region' },
  { label: 'Accra to Akwatia', path: '/service-areas/accra-to-akwatia', region: 'Eastern Region' },
  { label: 'Akwatia to Accra', path: '/service-areas/akwatia-to-accra', region: 'Eastern Region' },
  { label: 'Accra to Donkorkrom', path: '/service-areas/accra-to-donkorkrom', region: 'Eastern Region' },
  { label: 'Donkorkrom to Accra', path: '/service-areas/donkorkrom-to-accra', region: 'Eastern Region' },
  { label: 'Accra to Begoro', path: '/service-areas/accra-to-begoro', region: 'Eastern Region' },
  { label: 'Begoro to Accra', path: '/service-areas/begoro-to-accra', region: 'Eastern Region' },
  { label: 'Accra to Kumasi', path: '/service-areas/accra-to-kumasi', region: 'Ashanti Region' },
  { label: 'Kumasi to Accra', path: '/service-areas/kumasi-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Nandom', path: '/service-areas/accra-to-nandom', region: 'Upper West Region' },
  { label: 'Nandom to Accra', path: '/service-areas/nandom-to-accra', region: 'Upper West Region' },
  { label: 'Accra to Hamile', path: '/service-areas/accra-to-hamile', region: 'Upper West Region' },
  { label: 'Hamile to Accra', path: '/service-areas/hamile-to-accra', region: 'Upper West Region' },
  { label: 'Accra to Bole', path: '/service-areas/accra-to-bole', region: 'Savannah Region' },
  { label: 'Accra to Daboya', path: '/service-areas/accra-to-daboya', region: 'Savannah Region' },
  { label: 'Daboya to Accra', path: '/service-areas/daboya-to-accra', region: 'Savannah Region' },
  { label: 'Accra to Buipe', path: '/service-areas/accra-to-buipe', region: 'Savannah Region' },
  { label: 'Buipe to Accra', path: '/service-areas/buipe-to-accra', region: 'Savannah Region' },
  { label: 'Accra to Dambai', path: '/service-areas/accra-to-dambai', region: 'Oti Region' },
  { label: 'Dambai to Accra', path: '/service-areas/dambai-to-accra', region: 'Oti Region' },
  { label: 'Accra to Nkwanta', path: '/service-areas/accra-to-nkwanta', region: 'Oti Region' },
  { label: 'Nkwanta to Accra', path: '/service-areas/nkwanta-to-accra', region: 'Oti Region' },
  { label: 'Accra to Nkwanta South', path: '/service-areas/accra-to-nkwanta-south', region: 'Oti Region' },
  { label: 'Nkwanta South to Accra', path: '/service-areas/nkwanta-south-to-accra', region: 'Oti Region' },
  { label: 'Accra to Jasikan', path: '/service-areas/accra-to-jasikan', region: 'Oti Region' },
  { label: 'Jasikan to Accra', path: '/service-areas/jasikan-to-accra', region: 'Oti Region' },
  { label: 'Accra to Kadjebi', path: '/service-areas/accra-to-kadjebi', region: 'Oti Region' },
  { label: 'Kadjebi to Accra', path: '/service-areas/kadjebi-to-accra', region: 'Oti Region' },
  { label: 'Accra to Kete Krachi', path: '/service-areas/accra-to-kete-krachi', region: 'Oti Region' },
  { label: 'Kete Krachi to Accra', path: '/service-areas/kete-krachi-to-accra', region: 'Oti Region' },
  { label: 'Accra to Ejisu', path: '/service-areas/accra-to-ejisu', region: 'Ashanti Region' },
  { label: 'Ejisu to Accra', path: '/service-areas/ejisu-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Konongo', path: '/service-areas/accra-to-konongo', region: 'Ashanti Region' },
  { label: 'Konongo to Accra', path: '/service-areas/konongo-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Mampong', path: '/service-areas/accra-to-mampong', region: 'Ashanti Region' },
  { label: 'Mampong to Accra', path: '/service-areas/mampong-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Offinso', path: '/service-areas/accra-to-offinso', region: 'Ashanti Region' },
  { label: 'Offinso to Accra', path: '/service-areas/offinso-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Bekwai', path: '/service-areas/accra-to-bekwai', region: 'Ashanti Region' },
  { label: 'Bekwai to Accra', path: '/service-areas/bekwai-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Obuasi', path: '/service-areas/accra-to-obuasi', region: 'Ashanti Region' },
  { label: 'Obuasi to Accra', path: '/service-areas/obuasi-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Nkawie', path: '/service-areas/accra-to-nkawie', region: 'Ashanti Region' },
  { label: 'Nkawie to Accra', path: '/service-areas/nkawie-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Atonsu', path: '/service-areas/accra-to-atonsu', region: 'Ashanti Region' },
  { label: 'Atonsu to Accra', path: '/service-areas/atonsu-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Abuakwa', path: '/service-areas/accra-to-abuakwa', region: 'Ashanti Region' },
  { label: 'Abuakwa to Accra', path: '/service-areas/abuakwa-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Fomena', path: '/service-areas/accra-to-fomena', region: 'Ashanti Region' },
  { label: 'Fomena to Accra', path: '/service-areas/fomena-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Agona', path: '/service-areas/accra-to-agona', region: 'Ashanti Region' },
  { label: 'Agona to Accra', path: '/service-areas/agona-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Juaben', path: '/service-areas/accra-to-juaben', region: 'Ashanti Region' },
  { label: 'Juaben to Accra', path: '/service-areas/juaben-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Asante Akim', path: '/service-areas/accra-to-asante-akim', region: 'Ashanti Region' },
  { label: 'Asante Akim to Accra', path: '/service-areas/asante-akim-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Tepa', path: '/service-areas/accra-to-tepa', region: 'Ashanti Region' },
  { label: 'Tepa to Accra', path: '/service-areas/tepa-to-accra', region: 'Ashanti Region' },
  { label: 'Accra to Duayaw Nkwanta', path: '/service-areas/accra-to-duayaw-nkwanta', region: 'Ahafo Region' },
  { label: 'Duayaw Nkwanta to Accra', path: '/service-areas/duayaw-nkwanta-to-accra', region: 'Ahafo Region' },
  { label: 'Accra to Sunyani', path: '/service-areas/accra-to-sunyani', region: 'Bono Region' },
  { label: 'Sunyani to Accra', path: '/service-areas/sunyani-to-accra', region: 'Bono Region' },
  { label: 'Accra to Berekum', path: '/service-areas/accra-to-berekum', region: 'Bono Region' },
  { label: 'Berekum to Accra', path: '/service-areas/berekum-to-accra', region: 'Bono Region' },
  { label: 'Accra to Dormaa Ahenkro', path: '/service-areas/accra-to-dormaa-ahenkro', region: 'Bono Region' },
  { label: 'Dormaa Ahenkro to Accra', path: '/service-areas/dormaa-ahenkro-to-accra', region: 'Bono Region' },
  { label: 'Accra to Wenchi', path: '/service-areas/accra-to-wenchi', region: 'Bono Region' },
  { label: 'Wenchi to Accra', path: '/service-areas/wenchi-to-accra', region: 'Bono Region' },
  { label: 'Accra to Techiman', path: '/service-areas/accra-to-techiman', region: 'Bono East Region' },
  { label: 'Techiman to Accra', path: '/service-areas/techiman-to-accra', region: 'Bono East Region' },
  { label: 'Accra to Nkoranza', path: '/service-areas/accra-to-nkoranza', region: 'Bono East Region' },
  { label: 'Nkoranza to Accra', path: '/service-areas/nkoranza-to-accra', region: 'Bono East Region' },
  { label: 'Accra to Kintampo', path: '/service-areas/accra-to-kintampo', region: 'Bono East Region' },
  { label: 'Kintampo to Accra', path: '/service-areas/kintampo-to-accra', region: 'Bono East Region' },
  { label: 'Accra to Goaso', path: '/service-areas/accra-to-goaso', region: 'Ahafo Region' },
  { label: 'Goaso to Accra', path: '/service-areas/goaso-to-accra', region: 'Ahafo Region' },
  { label: 'Accra to Kenyasi', path: '/service-areas/accra-to-kenyasi', region: 'Ahafo Region' },
  { label: 'Kenyasi to Accra', path: '/service-areas/kenyasi-to-accra', region: 'Ahafo Region' },
  { label: 'Accra to Bechem', path: '/service-areas/accra-to-bechem', region: 'Ahafo Region' },
  { label: 'Bechem to Accra', path: '/service-areas/bechem-to-accra', region: 'Ahafo Region' },
  { label: 'Accra to Hwidiem', path: '/service-areas/accra-to-hwidiem', region: 'Ahafo Region' },
  { label: 'Hwidiem to Accra', path: '/service-areas/hwidiem-to-accra', region: 'Ahafo Region' },
  { label: 'Accra to Mim', path: '/service-areas/accra-to-mim', region: 'Ahafo Region' },
  { label: 'Mim to Accra', path: '/service-areas/mim-to-accra', region: 'Ahafo Region' },
  { label: 'Accra to Atebubu', path: '/service-areas/accra-to-atebubu', region: 'Bono East Region' },
  { label: 'Atebubu to Accra', path: '/service-areas/atebubu-to-accra', region: 'Bono East Region' },
  { label: 'Accra to Yeji', path: '/service-areas/accra-to-yeji', region: 'Bono East Region' },
  { label: 'Yeji to Accra', path: '/service-areas/yeji-to-accra', region: 'Bono East Region' },
  { label: 'Accra to Kwame Danso', path: '/service-areas/accra-to-kwame-danso', region: 'Bono East Region' },
  { label: 'Kwame Danso to Accra', path: '/service-areas/kwame-danso-to-accra', region: 'Bono East Region' },
  { label: 'Accra to Prang', path: '/service-areas/accra-to-prang', region: 'Bono East Region' },
  { label: 'Prang to Accra', path: '/service-areas/prang-to-accra', region: 'Bono East Region' },
  { label: 'Accra to Assin Fosu', path: '/service-areas/accra-to-assin-fosu', region: 'Central Region' },
  { label: 'Assin Fosu to Accra', path: '/service-areas/assin-fosu-to-accra', region: 'Central Region' },
  { label: 'Accra to Dunkwa-on-Offin', path: '/service-areas/accra-to-dunkwa-on-offin', region: 'Central Region' },
  { label: 'Dunkwa-on-Offin to Accra', path: '/service-areas/dunkwa-on-offin-to-accra', region: 'Central Region' },
  { label: 'Accra to Tamale', path: '/service-areas/accra-to-tamale', region: 'Northern Region' },
  { label: 'Tamale to Accra', path: '/service-areas/tamale-to-accra', region: 'Northern Region' },
  { label: 'Accra to Yendi', path: '/service-areas/accra-to-yendi', region: 'Northern Region' },
  { label: 'Yendi to Accra', path: '/service-areas/yendi-to-accra', region: 'Northern Region' },
  { label: 'Accra to Savelugu', path: '/service-areas/accra-to-savelugu', region: 'Northern Region' },
  { label: 'Savelugu to Accra', path: '/service-areas/savelugu-to-accra', region: 'Northern Region' },
  { label: 'Accra to Tolon', path: '/service-areas/accra-to-tolon', region: 'Northern Region' },
  { label: 'Tolon to Accra', path: '/service-areas/tolon-to-accra', region: 'Northern Region' },
  { label: 'Gushegu to Accra', path: '/service-areas/gushegu-to-accra', region: 'Northern Region' },
  { label: 'Accra to Karaga', path: '/service-areas/accra-to-karaga', region: 'Northern Region' },
  { label: 'Karaga to Accra', path: '/service-areas/karaga-to-accra', region: 'Northern Region' },
  { label: 'Accra to Damongo', path: '/service-areas/accra-to-damongo', region: 'Savannah Region' },
  { label: 'Damongo to Accra', path: '/service-areas/damongo-to-accra', region: 'Savannah Region' },
  { label: 'Accra to Salaga', path: '/service-areas/accra-to-salaga', region: 'Savannah Region' },
  { label: 'Salaga to Accra', path: '/service-areas/salaga-to-accra', region: 'Savannah Region' },
  { label: 'Accra to Nalerigu', path: '/service-areas/accra-to-nalerigu', region: 'North East Region' },
  { label: 'Nalerigu to Accra', path: '/service-areas/nalerigu-to-accra', region: 'North East Region' },
  { label: 'Accra to Gambaga', path: '/service-areas/accra-to-gambaga', region: 'North East Region' },
  { label: 'Gambaga to Accra', path: '/service-areas/gambaga-to-accra', region: 'North East Region' },
  { label: 'Accra to Walewale', path: '/service-areas/accra-to-walewale', region: 'North East Region' },
  { label: 'Walewale to Accra', path: '/service-areas/walewale-to-accra', region: 'North East Region' },
  { label: 'Accra to Bolgatanga', path: '/service-areas/accra-to-bolgatanga', region: 'Upper East Region' },
  { label: 'Bolgatanga to Accra', path: '/service-areas/bolgatanga-to-accra', region: 'Upper East Region' },
  { label: 'Accra to Navrongo', path: '/service-areas/accra-to-navrongo', region: 'Upper East Region' },
  { label: 'Navrongo to Accra', path: '/service-areas/navrongo-to-accra', region: 'Upper East Region' },
  { label: 'Accra to Bawku', path: '/service-areas/accra-to-bawku', region: 'Upper East Region' },
  { label: 'Bawku to Accra', path: '/service-areas/bawku-to-accra', region: 'Upper East Region' },
  { label: 'Accra to Paga', path: '/service-areas/accra-to-paga', region: 'Upper East Region' },
  { label: 'Paga to Accra', path: '/service-areas/paga-to-accra', region: 'Upper East Region' },
  { label: 'Accra to Zebilla', path: '/service-areas/accra-to-zebilla', region: 'Upper East Region' },
  { label: 'Zebilla to Accra', path: '/service-areas/zebilla-to-accra', region: 'Upper East Region' },
  { label: 'Accra to Sandema', path: '/service-areas/accra-to-sandema', region: 'Upper East Region' },
  { label: 'Sandema to Accra', path: '/service-areas/sandema-to-accra', region: 'Upper East Region' },
  { label: 'Accra to Fumbisi', path: '/service-areas/accra-to-fumbisi', region: 'Upper East Region' },
  { label: 'Fumbisi to Accra', path: '/service-areas/fumbisi-to-accra', region: 'Upper East Region' },
  { label: 'Accra to Wa', path: '/service-areas/accra-to-wa', region: 'Upper West Region' },
  { label: 'Wa to Accra', path: '/service-areas/wa-to-accra', region: 'Upper West Region' },
  { label: 'Accra to Tumu', path: '/service-areas/accra-to-tumu', region: 'Upper West Region' },
  { label: 'Tumu to Accra', path: '/service-areas/tumu-to-accra', region: 'Upper West Region' },
  { label: 'Accra to Lawra', path: '/service-areas/accra-to-lawra', region: 'Upper West Region' },
  { label: 'Lawra to Accra', path: '/service-areas/lawra-to-accra', region: 'Upper West Region' },
  { label: 'Accra to Jirapa', path: '/service-areas/accra-to-jirapa', region: 'Upper West Region' },
  { label: 'Jirapa to Accra', path: '/service-areas/jirapa-to-accra', region: 'Upper West Region' },
  { label: 'Accra to Ho', path: '/service-areas/accra-to-ho', region: 'Volta Region' },
  { label: 'Ho to Accra', path: '/service-areas/ho-to-accra', region: 'Volta Region' },
  { label: 'Accra to Hohoe', path: '/service-areas/accra-to-hohoe', region: 'Volta Region' },
  { label: 'Hohoe to Accra', path: '/service-areas/hohoe-to-accra', region: 'Volta Region' },
  { label: 'Accra to Aflao', path: '/service-areas/accra-to-aflao', region: 'Volta Region' },
  { label: 'Aflao to Accra', path: '/service-areas/aflao-to-accra', region: 'Volta Region' },
  { label: 'Accra to Keta', path: '/service-areas/accra-to-keta', region: 'Volta Region' },
  { label: 'Keta to Accra', path: '/service-areas/keta-to-accra', region: 'Volta Region' },
  { label: 'Accra to Sogakope', path: '/service-areas/accra-to-sogakope', region: 'Volta Region' },
  { label: 'Sogakope to Accra', path: '/service-areas/sogakope-to-accra', region: 'Volta Region' },
];

export default function ServiceAreas() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAreas = useMemo(() => {
    if (!searchQuery.trim()) return ALL_AREAS;
    const query = searchQuery.toLowerCase();
    return ALL_AREAS.filter(area => 
      area.label.toLowerCase().includes(query) || 
      area.region.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const groupedAreas = useMemo(() => {
    const groups: Record<string, typeof ALL_AREAS[0][]> = {};
    filteredAreas.forEach(area => {
      if (!groups[area.region]) groups[area.region] = [];
      groups[area.region].push(area);
    });

    const regionOrder = [
      "Greater Accra Region",
      "Ashanti Region",
      "Western Region",
      "Eastern Region",
      "Central Region",
      "Northern Region",
      "Bono Region",
      "Bono East Region",
      "Ahafo Region",
      "Volta Region",
      "Oti Region",
      "Western North Region",
      "Savannah Region",
      "North East Region",
      "Upper East Region",
      "Upper West Region"
    ];

    return Object.keys(groups).sort((a, b) => {
      const indexA = regionOrder.indexOf(a);
      const indexB = regionOrder.indexOf(b);
      
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      if (indexA !== -1) return -1;
      if (indexB !== -1) return 1;
      return a.localeCompare(b);
    }).reduce((acc: Record<string, typeof ALL_AREAS[0][]>, key) => {
      acc[key] = groups[key];
      return acc;
    }, {});
  }, [filteredAreas]);

  return (
    <>
      <SEO 
        title="Service Areas | Pexus"
        description="Comprehensive towing and vehicle recovery services across Ghana. Find our service areas and routes."
        canonical="/service-areas"
      />
      <div className="pt-24 pb-16 md:pb-20 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="mb-12">
            <Breadcrumbs items={[
              { label: 'Service Areas' }
            ]} />
            
            <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-5xl font-bold text-dark mb-4">
                  Our Service Areas
                </h1>
                <p className="text-dark/70 text-lg max-w-2xl">
                  We provide nationwide towing and vehicle recovery services across all major routes in Ghana.
                </p>
              </div>
              
              <div className="w-full md:w-96 relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-dark/40" />
                </div>
                <input
                  type="text"
                  placeholder="Search for a town or route..."
                  className="w-full pl-11 pr-4 py-4 bg-white border border-dark/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          {Object.keys(groupedAreas).length === 0 ? (
            <div className="bg-white rounded-[1px] p-6 sm:p-8 md:p-12 text-center border border-dark/10 shadow-sm">
              <MapPin className="w-12 h-12 text-dark/20 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-dark mb-2">No areas found</h3>
              <p className="text-dark/60 mb-8 max-w-md mx-auto">
                We couldn't find any service areas matching "{searchQuery}". We likely still cover your location! Contact us for immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:0597684860" className="flex items-center gap-2 bg-primary hover:bg-dark text-white px-6 py-3 font-bold transition-colors w-full sm:w-auto justify-center rounded-full">
                  <Phone className="w-5 h-5" />
                  Call Now: 0597684860
                </a>
                <a href="https://wa.me/233597684860" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#25D366] hover:bg-dark text-white px-6 py-3 font-bold transition-colors w-full sm:w-auto justify-center rounded-full">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(groupedAreas).map(([region, areas]) => (
                <div key={region} className="bg-white rounded-[1px] p-6 sm:p-8 border border-dark/10 shadow-sm">
                  <h2 className="text-2xl font-bold text-dark mb-6 pb-4 border-b border-dark/5 flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    {region}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {(areas as typeof ALL_AREAS[0][]).map((area, index) => (
                      <Link 
                        key={index}
                        to={area.path} 
                        className="bg-slate-50 p-4 rounded-xl border border-dark/5 hover:border-primary hover:shadow-md hover:bg-primary/5 transition-all group flex items-center justify-between rounded-full"
                      >
                        <span className="font-bold text-dark group-hover:text-primary transition-colors">
                          {area.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-dark/30 group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTAs */}
          <div className="mt-10 md:mt-16 bg-dark text-white rounded-[1px] p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/20" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                Our emergency towing team is available 24/7. Don't see your area listed? Contact us anyway, and we'll do our best to help you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="tel:0597684860" className="bg-primary hover:bg-white hover:text-dark text-white px-4 sm:px-8 py-4 font-bold transition-colors w-full sm:w-auto rounded-full">
                  Call Now: 059 768 4860
                </a>
                <a href="https://wa.me/233597684860" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-white hover:text-dark text-dark px-4 sm:px-8 py-4 font-bold transition-colors w-full sm:w-auto rounded-full">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
