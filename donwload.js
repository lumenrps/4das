
const games = [
    {
        title: "Minecraft",
        image: "https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/NewKeyArt_Header.jpg",
        description: "Sandbox game with endless creativity, exploration, and adventure.",
        creator: "Mojang Studios",
        link: "https://www.mediafire.com/file/441jgqberhjt8dk/MCPE%20v1.21.31%20-%20espacioapk.com.apk/file",
        category: "sandbox",
        platform: "Android"
    },
    {
        title: "Stardew Valley",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg?t=1711128146",
        description: "Relaxing farming simulation with RPG elements.",
        creator: "ConcernedApe",
        link: "https://www.mediafire.com/file_premium/ha89zowcx02u7kz/Stardew_Valley_1.5.6.52_Modilimitado.io.apk/file",
        category: "simulation",
        platform: "Android"
    },
    {
        title: "Grand Theft Auto: San Andreas",
        image: "https://s.zst.com.br/cms-assets/2021/04/16198185926113825.jpg",
        description: "Action-packed open-world adventure game.",
        creator: "Rockstar Games",
        link: "https://www.mediafire.com/file/p8o4y4milerael5/GTA+SA+(APK+++OBB)+v2.10+-+kyomipk.com.zip/file",
        category: "adventure",
        platform: "Android"
    },
    {
        title: "God of War: Ghost of Sparta",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWjpI9S5OAR6AGze9Z5hS6t0eBRmcsCZjoVm5DuuilF9E4BJqXckp6KLdcJ0JEIHB68QSocPd9MaOsn28NvmL2kVN8detsdIQbCSCFGUV4VTDlGtkLx_4gO81ln8wesD5Dau2ENJbVqcgAqp3efEdChiGfR2RDopzcV6kytPQqzZ-koMY7zyeh6D6KRQ/s512/descarga.jpg",
        description: "Action-packed adventure in the God of War universe, featuring Kratos in a new journey.",
        creator: "Santa Monica Studio",
        link: "https://www.mediafire.com/file/r36d92e8k92wujm/God_Of_Waar_GHOST_ByAF.apk/filebDfeMVZp7aDkaeUVD5xRiajS9-TcoIejyex_S8R7Y00ES4j--MqZYhnTXgpBl3J4KP9AYqOrnWaLSLRHTN5uRxavdcne/s1280/IMG_20220721_234023.png",
        category: "action",
        platform: "Android"
    },
    {
        title: "Geometry Dash",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoTlVgELdk_PUpWeFC1cpdDpM8X-hsL2gmSXXtZbXChm_9a46g-W0Cie5kusfw5EhPt3WlqoBq-1jstdIFRhBDptidRobeHIGprZqqheOa5zmbrwzTo2QQECUVfwFWowE884w0PvqPmXhIY1Y4J7efPZXCKYtdTI6Hd6J-vgjtl4SAZVvyG4otm9hZFQ/s512/unnamed.png",
        description: "Challenging rhythm-based platformer with high-speed gameplay and intense levels.",
        creator: "RobTop Games",
        link: "https://www.mediafire.com/file/j0hj3k0btjpbb82/Geometry+Dash+Mod+v2.2.13+-+kyomiapk.com.apk/file",
        category: "puzzle",
        platform: "Android"
    },
    {
        title: "Five Nights at Freddy's 2",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZsRi93mAP74BZRYvazwXT2gbnAGoJDQpJ-hzldQFMWNWaKZS0nKMn8nkrssQ5XE4eIZiBrz_DKIDXiUvYcoDerAWUab6zQeBPUUMvqdH6vC1qbZGmFA0Au3tkha9J-yATy8krb6ybwUprN_Rcz3RA39xxkHKl1ciaYSkzOuJKaMAe6L4JzkG_Cb1QirC2/s580/five_nights_at_freddy__039_s_2-5028681.jpg",
        description: "Survival horror game where you must survive five nights at a haunted pizzeria while avoiding creepy animatronics.",
        creator: "Scott Cawthon",
        link: "https://www.mediafire.com/file/cmnjfb0hs9ucdmp/Five+Nights+at+Freddys+2+v2.0.4+-+kyomiapk.com.apk/file",
        category: "horror",
        platform: "Android"
    },
    {
        title: "FNaF 6: Pizzeria Simulator",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgWs5QV_mXY4a_zzJeeO2F6gYNirrsbxw-TPDfLZKGZFq1GqCi9EAKyUSf89nVK-ziRkiVK8LsiECFi1bwKa84h7nS8H8ye-Ri-5TCvXlutjFAwtkWxKCBDoLinnmI4e0L_fkLyJvw1JDXah9QEX3GH312acnjxwFmal-KKffXtA58DU876yR6dL9nrpPvz/s512/fnaf-6-pizzeria-simulator-icon.jpg",
        description: "Build and manage your own pizzeria while surviving the night in this thrilling horror game.",
        creator: "Scott Cawthon",
        link: "https://www.mediafire.com/file/9irmtsuw0yj6m0v/FnaF%2521_Pizzer%25C3%25ADa%2521_Simulator%2521_Android%2521_By_LuixDroid171.rar/file",
        category: "horror",
        platform: "Android"
    },
    {
        title: "FNaF 4",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjcxgcmNlO2HLFlGhXteb-9xg_mcrLjmDUOf6NYdYARtgMzXPE8pQ0y-02S4TedIVwp5y-OPc3xfvSUcmL1Ktp-4Nd_7XMhfsWHO5DwNOfwOMqYBd4KBNhDV0eBTHWXpuo6K6MTs4LIbfzgEF7Y88DuGa9DF6_dXXUDINNvsecbn_ZkzGCRuDmmCA1-iBe1/s200/b3f8eb9ac823b82bb6407e87a7746a984b028013420d99b1ed1f93d88c7cc5a4_200.webp",
        description: "Experience the terrifying nightmares of Five Nights at Freddy's 4, a game filled with horror and suspense.",
        creator: "Scott Cawthon",
        link: "https://www.mediafire.com/file/mwew8lqkqgj9t5b/FNaF+4+v2.0.2+-+kyomiapk.com.apk/file",
        category: "horror",
        platform: "Android"
    },
    {
        title: "FNaF: Sister Location",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhx2xgHJrSEleu0HQIJdzQ1BTWxMO4gEYI_c3YLWaTjX_LDFZXzryH77X7Io8itb5Emeth1IaueK3V-lk3RIcFKnSrl2wCtsZucpDA-_KQTcaspT9RBMHXW5XYZmGotlEbbAy-5_BQ5i4Zbrev3BdbxdhLUiPkYHdAytchJOjazQdm2SkeiXwHIwsTXyH_e/s200/com.scottgames.sisterlocation.png",
        description: "Explore the terrifying events of Five Nights at Freddy's: Sister Location, filled with mystery and horror.",
        creator: "Scott Cawthon",
        link: "https://www.mediafire.com/file/p03c9lq8c9uwyzc/FNaF_Sister_Location_v1.2.1_(Android).apk/file",
        category: "horror",
        platform: "Android"
    },
    {
        title: "Five Nights at Freddy's",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglM-PsKKvueoGdNbbHdnYdBvmr_YvglIpbGPIWTrs00Bcx8ovLWa_tfECJMdzjd7rLR5XFO8agUbQYXiinL6DK_UEWV_PNpv5lyTFdf3SahUPkuejnIiSUo-vs0oq_MP-Ep1TY3rAD9y6m3Ud8mbI5bAgYFYDDpvoVRV0zGNsr5hPeOson14pTXkpyHw/s310/912b21cc50b45f15a40bfa103c48ecb1-l.webp",
        description: "Survive the terrifying nights at Freddy's with its animatronic monsters in this horror game.",
        creator: "Scott Cawthon",
        link: "https://www.mediafire.com/file/rpbd6e4oh3wmlaz/Five+Nights+at+Freddys+v2.0.3+-+kyomiapk.apk/file",
        category: "horror",
        platform: "Android"
    },
    {
        title: "Poppy Playtime Chapter 2",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5cw6lWjFaeVnd8sty77suVueJKCO7TSqm5ff5HNZRkQVVgSpE76Sni3KaMPW-4QbmIAFI_fHDCTtSwhGiYuRRylInN40l1ILeEupDwLlVaKCtlugruA0shj0rtibv1D1X59qWr50RnsDN8tTV1Gjq9IFMQeA7fdpmRbXoSAHc-MArSGSfaHdyQL_P5ML-/s512/unnamed.png",
        description: "Uncover the mysteries of Playtime Co. as you survive this terrifying chapter in the Poppy Playtime horror game series.",
        creator: "Mob Games",
        link: "https://www.mediafire.com/file/e98vd49l2m6i0wz/Poppy+Playtime+Chapter+2+v1.4+-+kyomiapk.com.apk/file",
        category: "horror",
        platform: "Android"
    },
    {
        title: "Poppy Playtime",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi4tiqzBIX0Ei2iHZASVyFkAOPbsY844lkiMo-efTsetz3dKu_oUauJ3nLJkJzzmz9A4rRIwLT4P_ivoUNrzpOzdwD370E7XmgTHQzs8_WOoOcluXvh_bxPllp3KqM5wm6IrIntrcG7BpxvcNHhlKvx81OQ9gmwTifK6R09IHP9Tcvr_fBtfvd50rdSEA/s512/unnamed.jpg",
        description: "Survive the horrors of Playtime Co. as you uncover its dark secrets in this first chapter of the terrifying horror game series.",
        creator: "Mob Games",
        link: "https://www.mediafire.com/file/2xlv25wwy4diw23/Poppy+Playtime+v1.0.8+-+kyomiapk.com.apk/file",
        category: "horror",
        platform: "Android"
    },
    {
        title: "Poppy Playtime Chapter 3",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTRBM-UG3oBnGUiILtt1Ikf-g40Izd9oIyxQyK9vrrhKy7k8IYaZfruNk7Qhh6eG-ln6p4JYMa3v99CzYpLpL5dGoaQ-3ZhxQ_e_e9Z3vBPFjmFyjijQn2Xgx0hXRMI4-csDDuWesxCrfu_MckAJZU1fGDIOYxJGvMj6w-4xtARX8inLGX7jBJkRIw-VQQ/s190/4f283c2543dbf06974e9bde5255183.jpg",
        description: "The horror continues in Chapter 3 as you face new terrifying challenges and uncover deeper secrets of Playtime Co.",
        creator: "Mob Games",
        link: "https://www.mediafire.com/file/sjfg8vy4o4v9qfv/Poppy+Playtime+Chapter+3+v0.5.9+-+kyomiapk.com.apk/file",
        category: "horror",
        platform: "Android"
    },
    {
        title: "Cuphead",
        image: "https://img.magic.ly/user/linkthumb/4a3913f0_1662593528495.webp",
        description: "A challenging action-platformer with a unique 1930s cartoon style, featuring boss fights and run-and-gun levels.",
        creator: "Studio MDHR",
        link: "https://www.mediafire.com/file/6vsez1r510s73r7/CanalBrunosousafcupheadOFICIAL.apk/file?dkey=7qjb1pbbgvh1596",
        category: "action",
        platform: "Android"
    },
    {
        title: "Resident Evil 4",
        image: "https://img.magic.ly/user/linkthumb/03d10300_1660961322800.webp",
        description: "A survival horror game where you play as Leon S. Kennedy to rescue the president's daughter from a sinister cult.",
        creator: "Capcom",
        link: "https://www.mediafire.com/file/2ncdtiaz1irramk/RESIDENT_EVIL_4_MOBILE_HD_OFICIAL_SK.zip/file",
        category: "action",
        platform: "Android"
    },
    {
        title: "Hollow Knight",
        image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg?t=1695270428",
        description: "An action-adventure game where you play as a mysterious knight exploring an ancient, forgotten kingdom full of creatures and secrets.",
        creator: "Team Cherry",
        link: "https://www.mediafire.com/file/isq8ai07rkuyaeb/Hollow_knight.apk/file?dkey=kidnfqrekkv&r=1503",
        category: "action",
        platform: "Android"
    },
    {
        title: "AetherSX2",
        image: "https://img.magic.ly/user/linkthumb/639afb60_1688593155606.webp",
        description: "A popular PlayStation 2 emulator for Android that lets you play PS2 games on your mobile device.",
        creator: "AetherSX2",
        link: "https://play.google.com/store/apps/details?id=xyz.aethersx2.android",
        category: "emulator",
        platform: "Android"
    },
    {
        title: "Naruto Ultimate Ninja Storm Mobile",
        image: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_NarutoUltimateNinjaStorm_image1600w.jpg",
        description: "A mobile version of the popular Naruto Ultimate Ninja Storm game series featuring epic battles and iconic characters.",
        creator: "Bandai Namco",
        link: "https://www.mediafire.com/file/gkws4t3maoa0dgg/NARUTO_ULTIMATE_NINJA_STORM_MOBILE.apk/file?dkey=gkws4t3maoa0dgg",
        category: "fighting",
        platform: "Android"
    },
    {
        title: "The Binding of Isaac: Rebirth",
        image: "https://androidrey.com/uploads/mini/full/adc/1638365121_1_the_binding_of_isaac_rebirth.webp",
        description: "A rogue-like dungeon crawler with procedurally generated levels and intense gameplay.",
        creator: "Nicalis",
        link: "https://www.nicalis.com/",
        category: "indie",
        platform: "Android"
    },
    {
        title: "PPSSPP Gold",
        image: "https://ristechy.com/wp-content/uploads/2017/06/PPSSPP-GOLD-Apk.jpg",
        description: "A premium emulator for playing PlayStation Portable (PSP) games with enhanced graphics and features.",
        creator: "PPSSPP",
        link: "https://www.ppsspp.org",
        category: "emulator",
        platform: "Android"
    },
    {
        title: "God of War: Chains of Olympus",
        image: "https://psxbrasil.com.br/wp-content/uploads/2011/09/chainsofolympus.jpg",
        description: "An action-packed adventure where Kratos embarks on a journey through the Greek mythological world. Face powerful enemies and solve puzzles.",
        creator: "Sony",
        link: "https://www.romspedia.com/roms/playstation-portable/god-of-war-chains-of-olympus/download?speed=fast",
        category: "action",
        platform: "Android"
        
    },
    {
        title: "Spider-Man 3",
        image: "https://static.romspedia.com/webp/roms/spider-man-3-psp-cover-340x483.webp",
        description: "Swing through the streets of New York as Spider-Man in this action-packed game based on the movie, featuring various combat moves and missions.",
        creator: "Treyarch",
        link: "https://www.romspedia.com/roms/playstation-portable/spider-man-3/download?speed=fast",
        category: "action",
        platform: "Android",
    },
    {
        title: "Tekken 6",
        image: "https://m.media-amazon.com/images/I/81rFjLj6hfS._SY445_.jpg",
        description: "Tekken 6 brings the epic fighting franchise to PSP with new characters, improved graphics, and exciting combat mechanics.",
        creator: "Bandai Namco",
        link: "https://www.romspedia.com/roms/playstation-portable/tekken-6/download?speed=fast",
        category: "fighting",
        platform: "Android"
    }
        // Add the rest of the games here...
    ];
  