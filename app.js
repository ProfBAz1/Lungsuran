    (function () {
      "use strict";

      /* -------------------------------------------------------------------
       * 1. GENERATOR ARTWORK REAL-PICT SVG DATA URI (CSP & OFFLINE SAFE)
       * ------------------------------------------------------------------- */
      function createProductArtwork(bgHex, accentHex, badgeText, titleText) {
        const svg =
          '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450">' +
          '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0%" stop-color="' + bgHex + '"/>' +
          '<stop offset="100%" stop-color="' + accentHex + '"/>' +
          '</linearGradient></defs>' +
          '<rect width="600" height="450" fill="url(#g)"/>' +
          '<circle cx="495" cy="95" r="85" fill="#ffffff" fill-opacity="0.14"/>' +
          '<circle cx="105" cy="365" r="105" fill="#000000" fill-opacity="0.08"/>' +
          '<rect x="44" y="42" width="215" height="34" rx="17" fill="#1C1917" fill-opacity="0.7"/>' +
          '<text x="151" y="64" font-family="sans-serif" font-size="13" font-weight="bold" fill="#FFFFFF" text-anchor="middle">' + badgeText + '</text>' +
          '<rect x="44" y="295" width="512" height="110" rx="22" fill="#FFFFFF" fill-opacity="0.93"/>' +
          '<text x="68" y="342" font-family="sans-serif" font-size="24" font-weight="bold" fill="#1C1917">' + titleText + '</text>' +
          '<text x="68" y="376" font-family="sans-serif" font-size="15" fill="#57534E">Real Pict Kamera Asli • Tanpa Filter</text>' +
          '</svg>';
        return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
      }

      /* -------------------------------------------------------------------
       * 2. DATA AWAL KATALOG, KOLEKSI BARTER & TRANSAKSI
       * ------------------------------------------------------------------- */
      const INITIAL_PRODUCTS = [
        {
          id: "prd-101",
          title: "Kamera Analog Fujifilm Simple Ace + Roll Film",
          type: "Preloved",
          price: 185000,
          distanceKm: 0.8,
          area: "Kampus Unsam",
          conditionScore: 92,
          seller: "Raka Pratama",
          codCount: 11,
          sellerStats: "Mahasiswa • 11 COD Sukses",
          allowOffer: true,
          allowBarter: true,
          minusNote: "92% mulus, minus lecet halus di bagian bawah bodi plastik.",
          checklist: [
            "92% mulus, minus lecet halus di bagian bawah",
            "Shutter & lampu flash menyala normal 100%",
            "Lensa bersih bebas jamur & kabut",
            "Foto asli kamera tanpa filter (real pict)"
          ],
          description: "Kamera saku ringan cocok untuk dokumentasi acara kampus atau jalan sore. Dijual karena sudah beralih ke kamera mirrorless.",
          image: createProductArtwork("#D97706", "#9A3412", "REAL PICT • KAMERA", "Fujifilm Analog 35mm")
        },
        {
          id: "prd-102",
          title: "Set Cangkir Keramik Handmade Glasir Tanah Liat",
          type: "Handmade",
          price: 110000,
          distanceKm: 1.5,
          area: "Langsa Kota",
          conditionScore: 100,
          seller: "Studio Kriya Nadira",
          codCount: 24,
          sellerStats: "Perajin Lokal • 24 COD Sukses",
          allowOffer: true,
          allowBarter: true,
          minusNote: "100% baru buatan tangan, corak glasir alami unik di tiap cangkir.",
          checklist: [
            "100% baru karya perajin keramik lokal",
            "Glasir food-grade aman untuk minuman panas",
            "Foto real pict pencahayaan alami tanpa filter",
            "Dikemas kotak kardus tebal siap COD"
          ],
          description: "Sepasang cangkir keramik ukuran 220ml dibakar suhu tinggi. Cocok untuk seduh kopi manual V60 atau hadiah sahabat.",
          image: createProductArtwork("#B45309", "#78350F", "HANDMADE LOKAL", "Set Cangkir Keramik")
        },
        {
          id: "prd-103",
          title: "Jaket Parka Kanvas Olive Preloved Ukuran L",
          type: "Preloved",
          price: 145000,
          distanceKm: 2.4,
          area: "Gampong Jawa",
          conditionScore: 90,
          seller: "Dimas Saputra",
          codCount: 8,
          sellerStats: "Warga Terverifikasi • 8 COD Sukses",
          allowOffer: true,
          allowBarter: true,
          minusNote: "90% mulus, warna sedikit memudar alami di lipatan lengan.",
          checklist: [
            "90% mulus, minus pudar halus di lipatan lengan",
            "Resleting YKK & kancing cetet lancar",
            "Sudah dicuci bersih wangi & higienis",
            "Real pict outdoor tanpa filter warna"
          ],
          description: "Bahan kanvas tebal nyaman dipakai berkendara motor malam hari. Kantong dalam muat dompet dan ponsel 6.7 inci.",
          image: createProductArtwork("#3F6212", "#14532D", "REAL PICT • FASHION", "Jaket Parka Kanvas L")
        },
        {
          id: "prd-104",
          title: "Tas Totebag Tenun & Kulit Sintetis Handmade",
          type: "Handmade",
          price: 165000,
          distanceKm: 3.7,
          area: "Paya Bujok",
          conditionScore: 98,
          seller: "Ayu Lestari Craft",
          codCount: 19,
          sellerStats: "UMKM Rumahan • 19 COD Sukses",
          allowOffer: true,
          allowBarter: false,
          minusNote: "98% mulus buatan tangan skala kecil, jahitan rapi dengan furing katun.",
          checklist: [
            "Muat laptop 14 inci + buku catatan tebal",
            "Tali bahu diperkuat jahitan silang ganda",
            "Foto asli tanpa filter studio",
            "Bonus gantungan kunci rajut handmade"
          ],
          description: "Perpaduan kain tenun motif lokal dengan bahan kulit sintetis tahan percikan air. Cocok untuk kuliah maupun kerja.",
          image: createProductArtwork("#C2410C", "#7C2D12", "HANDMADE LOKAL", "Totebag Tenun 14 Inci")
        },
        {
          id: "prd-105",
          title: "Standing Lamp Kayu Jati Belanda Minimalis",
          type: "Handmade",
          price: 210000,
          distanceKm: 4.5,
          area: "Teungoh",
          conditionScore: 96,
          seller: "Bengkel Kayu Pak Hendra",
          codCount: 31,
          sellerStats: "Perajin Kayu • 31 COD Sukses",
          allowOffer: true,
          allowBarter: true,
          minusNote: "96% mulus, serat kayu alami memiliki mata kayu kecil yang estetik.",
          checklist: [
            "Kabel saklar panjang 1.8 meter aman",
            "Finishing vernis water-based halus",
            "Bonus bohlam LED warm white 5W",
            "Foto asli di ruang tamu tanpa filter"
          ],
          description: "Lampu sudut ruangan dari kayu pinus daur ulang pilihan. Memberikan pencahayaan hangat untuk kamar tidur atau meja belajar.",
          image: createProductArtwork("#A16207", "#451A03", "HANDMADE KAYU", "Lampu Meja Jati Belanda")
        },
        {
          id: "prd-106",
          title: "Keyboard Mekanikal 65% Brown Switch Bekas",
          type: "Preloved",
          price: 275000,
          distanceKm: 8.1,
          area: "Langsa Lama",
          conditionScore: 89,
          seller: "Fajar Nugroho",
          codCount: 6,
          sellerStats: "Warga Terverifikasi • 6 COD Sukses",
          allowOffer: true,
          allowBarter: true,
          minusNote: "89% mulus, minus dus bawaan hilang, diganti kabel Type-C braided.",
          checklist: [
            "89% mulus, minus dus asli tidak ada",
            "Semua 68 tombol responsif tanpa double-click",
            "Keycaps sudah dibersihkan menyeluruh",
            "Real pict meja kerja tanpa filter"
          ],
          description: "Keyboard ringkas nyaman untuk mengetik skripsi maupun coding. Bisa barter dengan headset atau mouse wireless setara.",
          image: createProductArtwork("#44403C", "#1C1917", "REAL PICT • GADGET", "Mechanical Keyboard 65%")
        }
      ];

      const INITIAL_MY_BARTER_ITEMS = [
        { id: "brt-1", title: "Headphone Bluetooth Over-Ear (90% Mulus, busa sedikit keriput)", value: 160000 },
        { id: "brt-2", title: "Paket 3 Buku Desain UI/UX & Novel (95% Mulus tanpa coretan)", value: 120000 }
      ];

      const INITIAL_TRANSACTIONS = [
        {
          id: "TX-8841",
          productId: "prd-103",
          productTitle: "Jaket Parka Kanvas Olive Preloved Ukuran L",
          seller: "Dimas Saputra",
          amount: 135000,
          location: "Minimarket Indomaret Point Jl. Merdeka (Area Kasir & CCTV)",
          date: "2026-11-28",
          time: "16:00",
          otp: "492815",
          status: "MENUNGGU_COD",
          review: null
        }
      ];

      /* -------------------------------------------------------------------
       * 3. STATE APLIKASI & LOCALSTORAGE PERSISTENCE
       * ------------------------------------------------------------------- */
      const STORAGE_KEY = "lungsuran_c2c_pkg3_v1";

      function loadState() {
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (raw) {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed.products) && parsed.products.length > 0) {
              return {
                products: parsed.products,
                savedProductIds: Array.isArray(parsed.savedProductIds) ? parsed.savedProductIds : [],
                myBarterItems: Array.isArray(parsed.myBarterItems) ? parsed.myBarterItems : INITIAL_MY_BARTER_ITEMS,
                transactions: Array.isArray(parsed.transactions) ? parsed.transactions : INITIAL_TRANSACTIONS,
                chats: parsed.chats || {},
                helpTickets: Array.isArray(parsed.helpTickets) ? parsed.helpTickets : []
              };
            }
          }
        } catch (err) {
          // Gunakan default state
        }
        return {
          products: INITIAL_PRODUCTS,
          savedProductIds: [],
          myBarterItems: INITIAL_MY_BARTER_ITEMS,
          transactions: INITIAL_TRANSACTIONS,
          chats: {},
          helpTickets: []
        };
      }

      const appState = loadState();

      function saveState() {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
        } catch (err) {
          // Abaikan jika storage penuh
        }
      }

      const uiState = {
        activeView: "catalog",
        maxRadius: 5,
        category: "all",
        barterOnly: false,
        savedOnly: false,
        searchQuery: "",
        sortBy: "nearest",
        activeProductId: null,
        agreedPriceOverride: null,
        chatMode: "text",
        sellPhotoDataUrl: "",
        sellPhotoReady: false,
        customBarterPhotoName: ""
      };

      /* -------------------------------------------------------------------
       * 4. UTILITAS KEAMANAN DOM (ANTI-XSS) & NOTIFIKASI TOAST
       * ------------------------------------------------------------------- */
      function formatRupiah(num) {
        const n = Number(num) || 0;
        return "Rp " + n.toLocaleString("id-ID");
      }

      function clearElement(el) {
        while (el && el.firstChild) {
          el.removeChild(el.firstChild);
        }
      }

      function showToast(title, message, variant) {
        const container = document.getElementById("toast-container");
        const toast = document.createElement("div");
        const isSuccess = variant === "success";
        const isWarn = variant === "warn";

        toast.className =
          "pointer-events-auto rounded-2xl p-3.5 shadow-lg border bg-white flex items-start gap-3 animate-fade-up " +
          (isSuccess ? "border-green-300" : isWarn ? "border-amber-300" : "border-[#E7E0D5]");

        const icon = document.createElement("span");
        icon.className =
          "w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-white font-extrabold text-xs " +
          (isSuccess ? "bg-[#15803D]" : isWarn ? "bg-[#D97706]" : "bg-[#C2410C]");
        icon.textContent = isSuccess ? "✓" : isWarn ? "!" : "i";

        const body = document.createElement("div");
        body.className = "flex-1 min-w-0";

        const h = document.createElement("p");
        h.className = "text-xs font-extrabold text-[#1C1917]";
        h.textContent = title;

        const p = document.createElement("p");
        p.className = "text-xs text-[#57534E] mt-0.5 leading-snug";
        p.textContent = message;

        body.appendChild(h);
        body.appendChild(p);
        toast.appendChild(icon);
        toast.appendChild(body);
        container.appendChild(toast);

        setTimeout(function () {
          if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
          }
        }, 4200);
      }

      function openModal(id) {
        const el = document.getElementById(id);
        if (el) el.classList.remove("hidden");
      }

      function closeModal(id) {
        const el = document.getElementById(id);
        if (el) el.classList.add("hidden");
      }

      function generateSecureOtp() {
        if (window.crypto && window.crypto.getRandomValues) {
          const arr = new Uint32Array(1);
          window.crypto.getRandomValues(arr);
          return String(100000 + (arr[0] % 900000));
        }
        return String(Math.floor(100000 + Math.random() * 900000));
      }

      /* -------------------------------------------------------------------
       * 5. BOOKMARK / WISHLIST TERSIMPAN
       * ------------------------------------------------------------------- */
      function renderSavedBadge() {
        const savedCount = appState.savedProductIds.length;
        const badge = document.getElementById("saved-tab-badge");
        if (badge) {
          badge.textContent = String(savedCount);
        }
      }

      function isProductSaved(productId) {
        return appState.savedProductIds.indexOf(productId) !== -1;
      }

      function toggleProductBookmark(productId) {
        const idx = appState.savedProductIds.indexOf(productId);
        const product = getProductById(productId);
        if (idx === -1) {
          appState.savedProductIds.push(productId);
          showToast("Tersimpan di Wishlist", (product ? product.title : "Barang") + " ditambahkan ke daftar tersimpan.", "success");
        } else {
          appState.savedProductIds.splice(idx, 1);
          showToast("Dihapus dari Tersimpan", "Barang dihapus dari daftar tersimpan Anda.", "info");
        }
        saveState();
        renderSavedBadge();
        renderCatalog();
        updateDetailBookmarkButton(productId);
      }

      function updateDetailBookmarkButton(productId) {
        const btn = document.getElementById("btn-detail-bookmark");
        if (!btn) return;
        const saved = isProductSaved(productId);
        btn.textContent = saved ? "♥ Tersimpan" : "♡ Simpan";
        btn.className = saved
          ? "px-3 py-2 rounded-xl bg-orange-50 border border-[#C2410C] text-xs font-extrabold text-[#C2410C] transition-colors"
          : "px-3 py-2 rounded-xl bg-white border border-[#E7E0D5] text-xs font-extrabold text-[#57534E] hover:border-[#C2410C] transition-colors";
      }

      /* -------------------------------------------------------------------
       * 6. NAVIGASI MULTI-HALAMAN (KATALOG, TENTANG, PANDUAN, BANTUAN)
       * ------------------------------------------------------------------- */
      function switchView(viewName) {
        uiState.activeView = viewName;

        document.querySelectorAll(".app-view").forEach(function (sec) {
          sec.classList.add("hidden");
        });
        const target = document.getElementById("view-" + viewName);
        if (target) {
          target.classList.remove("hidden");
        }

        document.querySelectorAll(".main-nav-btn").forEach(function (btn) {
          const active = btn.getAttribute("data-nav-view") === viewName;
          btn.className = active
            ? "main-nav-btn px-3.5 py-2 rounded-xl text-xs font-extrabold bg-[#1C1917] text-white transition-colors"
            : "main-nav-btn px-3.5 py-2 rounded-xl text-xs font-bold text-[#57534E] hover:text-[#1C1917] transition-colors";
        });

        document.querySelectorAll(".main-nav-btn-mob").forEach(function (btn) {
          const active = btn.getAttribute("data-nav-view") === viewName;
          btn.className = active
            ? "main-nav-btn-mob px-3 py-1.5 rounded-xl text-xs font-extrabold bg-[#1C1917] text-white"
            : "main-nav-btn-mob px-3 py-1.5 rounded-xl text-xs font-bold bg-white border border-[#E7E0D5] text-[#57534E]";
        });

        document.querySelectorAll(".mob-bottom-btn").forEach(function (btn) {
          const active = btn.getAttribute("data-nav-view") === viewName;
          btn.className = active
            ? "mob-bottom-btn flex flex-col items-center justify-center py-1 rounded-xl text-[#C2410C] font-extrabold"
            : "mob-bottom-btn flex flex-col items-center justify-center py-1 rounded-xl text-[#57534E] font-bold";
        });

        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      /* -------------------------------------------------------------------
       * 7. RENDER KATALOG PRODUK (100% DOM AMAN)
       * ------------------------------------------------------------------- */
      function getFilteredProducts() {
        const q = uiState.searchQuery.trim().toLowerCase();

        const filtered = appState.products.filter(function (item) {
          const matchRadius = uiState.maxRadius >= 15 ? true : item.distanceKm <= uiState.maxRadius;
          const matchCat = uiState.category === "all" ? true : item.type === uiState.category;
          const matchBarter = uiState.barterOnly ? Boolean(item.allowBarter) : true;
          const matchSaved = uiState.savedOnly ? isProductSaved(item.id) : true;
          const matchSearch =
            !q ||
            item.title.toLowerCase().includes(q) ||
            item.area.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q);
          return matchRadius && matchCat && matchBarter && matchSaved && matchSearch;
        });

        filtered.sort(function (a, b) {
          if (uiState.sortBy === "cheapest") return a.price - b.price;
          if (uiState.sortBy === "condition") return b.conditionScore - a.conditionScore;
          return a.distanceKm - b.distanceKm;
        });

        return filtered;
      }

      function renderCatalog() {
        const grid = document.getElementById("catalog-grid");
        const emptyBox = document.getElementById("catalog-empty");
        const countLabel = document.getElementById("catalog-count-label");

        clearElement(grid);
        const items = getFilteredProducts();

        countLabel.textContent =
          "Menampilkan " +
          items.length +
          " barang (radius " +
          (uiState.maxRadius >= 15 ? "Semua" : "≤ " + uiState.maxRadius + " km") +
          ")";

        if (items.length === 0) {
          emptyBox.classList.remove("hidden");
          return;
        }
        emptyBox.classList.add("hidden");

        items.forEach(function (item) {
          const card = document.createElement("article");
          card.className =
            "bg-white rounded-2xl border border-[#E7E0D5] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#C2410C]/60 transition-all flex flex-col justify-between animate-fade-up cursor-pointer";

          card.addEventListener("click", function () {
            openProductDetail(item.id);
          });

          const imgWrap = document.createElement("div");
          imgWrap.className = "relative aspect-[4/3] bg-[#FAF7F2] overflow-hidden";

          const img = document.createElement("img");
          img.src = item.image;
          img.alt = item.title;
          img.loading = "lazy";
          img.className = "w-full h-full object-cover hover:scale-105 transition-transform duration-300";
          imgWrap.appendChild(img);

          // Top Badges + Bookmark Button
          const topBadges = document.createElement("div");
          topBadges.className = "absolute top-3 left-3 right-3 flex items-center justify-between gap-2";

          const leftBadgeGroup = document.createElement("div");
          leftBadgeGroup.className = "flex items-center gap-1.5 flex-wrap";

          const typePill = document.createElement("span");
          typePill.className =
            "px-2.5 py-1 rounded-xl text-[11px] font-extrabold " +
            (item.type === "Handmade" ? "bg-[#D97706] text-white" : "bg-[#1C1917]/90 text-white");
          typePill.textContent = item.type;

          const realPictPill = document.createElement("span");
          realPictPill.className =
            "px-2 py-1 rounded-xl text-[10px] font-extrabold bg-white/95 text-[#15803D] border border-green-200";
          realPictPill.textContent = "✓ Real Pict";

          leftBadgeGroup.appendChild(typePill);
          leftBadgeGroup.appendChild(realPictPill);

          const saved = isProductSaved(item.id);
          const saveBtn = document.createElement("button");
          saveBtn.type = "button";
          saveBtn.setAttribute("aria-label", saved ? "Hapus dari tersimpan" : "Simpan barang");
          saveBtn.className =
            "w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black shadow-xs transition-colors " +
            (saved
              ? "bg-[#C2410C] text-white"
              : "bg-white/95 text-[#57534E] hover:text-[#C2410C]");
          saveBtn.textContent = saved ? "♥" : "♡";
          saveBtn.addEventListener("click", function (ev) {
            ev.stopPropagation();
            toggleProductBookmark(item.id);
          });

          topBadges.appendChild(leftBadgeGroup);
          topBadges.appendChild(saveBtn);
          imgWrap.appendChild(topBadges);

          // Bottom Distance & Condition Score
          const bottomOverlay = document.createElement("div");
          bottomOverlay.className =
            "absolute bottom-2.5 left-3 right-3 px-3 py-1.5 rounded-xl bg-stone-950/80 text-white flex items-center justify-between text-xs";

          const distText = document.createElement("span");
          distText.className = "font-extrabold truncate";
          distText.textContent = item.distanceKm + " km • " + item.area;

          const scoreText = document.createElement("span");
          scoreText.className = "font-extrabold text-green-300 shrink-0 ml-2";
          scoreText.textContent = item.conditionScore + "% Mulus";

          bottomOverlay.appendChild(distText);
          bottomOverlay.appendChild(scoreText);
          imgWrap.appendChild(bottomOverlay);

          // Body
          const body = document.createElement("div");
          body.className = "p-4 flex-1 flex flex-col justify-between space-y-3";

          const topInfo = document.createElement("div");

          const titleEl = document.createElement("h2");
          titleEl.className = "text-sm sm:text-base font-extrabold text-[#1C1917] line-clamp-2 leading-snug";
          titleEl.textContent = item.title;

          const priceEl = document.createElement("p");
          priceEl.className = "text-lg font-extrabold text-[#C2410C] mt-1";
          priceEl.textContent = formatRupiah(item.price);

          const minusBox = document.createElement("p");
          minusBox.className =
            "mt-2 text-xs text-amber-950 bg-amber-50 border border-amber-200 rounded-xl px-2.5 py-1.5 line-clamp-2 font-medium";
          minusBox.textContent = item.minusNote;

          topInfo.appendChild(titleEl);
          topInfo.appendChild(priceEl);
          topInfo.appendChild(minusBox);

          // Footer
          const footer = document.createElement("div");
          footer.className = "pt-2.5 border-t border-[#F3EDE2] flex items-center justify-between gap-2";

          const flexTags = document.createElement("div");
          flexTags.className = "flex flex-wrap gap-1";

          if (item.allowOffer) {
            const t1 = document.createElement("span");
            t1.className = "px-2 py-0.5 rounded-lg bg-orange-50 text-[#C2410C] text-[11px] font-bold";
            t1.textContent = "Tawar Harga";
            flexTags.appendChild(t1);
          }
          if (item.allowBarter) {
            const t2 = document.createElement("span");
            t2.className = "px-2 py-0.5 rounded-lg bg-amber-50 text-[#D97706] text-[11px] font-bold";
            t2.textContent = "Bisa Barter";
            flexTags.appendChild(t2);
          }

          const cta = document.createElement("span");
          cta.className = "text-xs font-extrabold text-[#15803D] shrink-0";
          cta.textContent = "Detail & COD →";

          footer.appendChild(flexTags);
          footer.appendChild(cta);

          body.appendChild(topInfo);
          body.appendChild(footer);

          card.appendChild(imgWrap);
          card.appendChild(body);
          grid.appendChild(card);
        });
      }

      /* -------------------------------------------------------------------
       * 8. DETAIL PRODUK, CHAT NEGOSIASI, BARTER & COD OTP + RATING
       * ------------------------------------------------------------------- */
      function getProductById(id) {
        return appState.products.find(function (p) {
          return p.id === id;
        });
      }

      function openProductDetail(productId) {
        const item = getProductById(productId);
        if (!item) return;

        uiState.activeProductId = item.id;
        uiState.agreedPriceOverride = null;

        document.getElementById("detail-type-badge").textContent = item.type;
        document.getElementById("detail-img").src = item.image;
        document.getElementById("detail-distance-label").textContent = item.distanceKm + " km • " + item.area;
        document.getElementById("detail-condition-score").textContent = item.conditionScore + "% Mulus";
        document.getElementById("detail-title").textContent = item.title;
        document.getElementById("detail-price").textContent = formatRupiah(item.price);
        document.getElementById("detail-seller").textContent = item.seller;
        document.getElementById("detail-seller-stats").textContent = item.sellerStats;
        document.getElementById("detail-minus").textContent = item.minusNote;
        document.getElementById("detail-desc").textContent = item.description;

        updateDetailBookmarkButton(item.id);

        const tagsWrap = document.getElementById("detail-flex-tags");
        clearElement(tagsWrap);
        if (item.allowOffer) {
          const s1 = document.createElement("span");
          s1.className = "px-3 py-1 rounded-xl bg-orange-100 text-[#C2410C] text-xs font-bold";
          s1.textContent = "✓ Terima Tawar Harga";
          tagsWrap.appendChild(s1);
        }
        if (item.allowBarter) {
          const s2 = document.createElement("span");
          s2.className = "px-3 py-1 rounded-xl bg-amber-100 text-amber-900 text-xs font-bold";
          s2.textContent = "⇄ Terima Barter Barang";
          tagsWrap.appendChild(s2);
        }

        const listEl = document.getElementById("detail-checklist");
        clearElement(listEl);
        item.checklist.forEach(function (point) {
          const li = document.createElement("li");
          li.className = "flex items-start gap-2 bg-white p-2.5 rounded-xl border border-[#E7E0D5]";

          const icon = document.createElement("span");
          icon.className = "text-[#15803D] font-extrabold shrink-0";
          icon.textContent = "✓";

          const txt = document.createElement("span");
          txt.className = "font-medium";
          txt.textContent = point;

          li.appendChild(icon);
          li.appendChild(txt);
          listEl.appendChild(li);
        });

        openModal("modal-detail");
      }

      function ensureChatThread(product) {
        if (!appState.chats[product.id]) {
          appState.chats[product.id] = [
            {
              sender: "seller",
              type: "text",
              text:
                "Halo! Barang \"" +
                product.title +
                "\" siap COD di area " +
                product.area +
                " (" +
                product.distanceKm +
                " km). Silakan tawar harga atau ajukan barter barang ya.",
              time: "Baru saja"
            }
          ];
          saveState();
        }
        return appState.chats[product.id];
      }

      function setChatMode(mode) {
        uiState.chatMode = mode;
        document.querySelectorAll(".chat-mode-btn").forEach(function (btn) {
          const match = btn.getAttribute("data-chat-mode") === mode;
          btn.className = match
            ? "chat-mode-btn py-2 px-2 rounded-xl text-xs font-extrabold bg-[#1C1917] text-white transition-colors"
            : "chat-mode-btn py-2 px-2 rounded-xl text-xs font-bold bg-[#FAF7F2] text-[#57534E] border border-[#E7E0D5] transition-colors";
        });

        document.getElementById("form-chat-text").classList.toggle("hidden", mode !== "text");
        document.getElementById("form-chat-offer").classList.toggle("hidden", mode !== "offer");
        document.getElementById("form-chat-barter").classList.toggle("hidden", mode !== "barter");
      }

      function renderChatMessages(product) {
        const box = document.getElementById("chat-messages-box");
        clearElement(box);
        const thread = ensureChatThread(product);

        thread.forEach(function (msg) {
          const isBuyer = msg.sender === "buyer";
          const row = document.createElement("div");
          row.className = "flex flex-col " + (isBuyer ? "items-end" : "items-start");

          const bubble = document.createElement("div");
          bubble.className =
            "max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm shadow-2xs " +
            (isBuyer
              ? "bg-[#C2410C] text-white rounded-br-xs"
              : "bg-white border border-[#E7E0D5] text-[#1C1917] rounded-bl-xs");

          if (msg.type === "offer") {
            const tag = document.createElement("span");
            tag.className = "inline-block px-2 py-0.5 rounded-lg bg-amber-300 text-stone-950 text-[10px] font-extrabold uppercase mb-1";
            tag.textContent = "Penawaran Harga";
            bubble.appendChild(tag);
          } else if (msg.type === "barter") {
            const tag = document.createElement("span");
            tag.className = "inline-block px-2 py-0.5 rounded-lg bg-green-300 text-stone-950 text-[10px] font-extrabold uppercase mb-1";
            tag.textContent = "Penawaran Barter";
            bubble.appendChild(tag);
          }

          const p = document.createElement("p");
          p.className = "leading-relaxed font-medium";
          p.textContent = msg.text;
          bubble.appendChild(p);

          if (msg.acceptedDeal) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className =
              "mt-2.5 w-full py-2 px-3 rounded-xl bg-[#15803D] hover:bg-green-800 text-white text-xs font-extrabold transition-colors";
            btn.textContent = "Kunci Jadwal COD (" + msg.dealLabel + ") →";
            btn.addEventListener("click", function () {
              uiState.agreedPriceOverride = msg.dealPrice;
              closeModal("modal-chat");
              openCodModal(product.id);
            });
            bubble.appendChild(btn);
          }

          const meta = document.createElement("span");
          meta.className = "text-[10px] text-[#78716C] mt-1 px-1";
          meta.textContent = (isBuyer ? "Anda" : product.seller) + " • " + msg.time;

          row.appendChild(bubble);
          row.appendChild(meta);
          box.appendChild(row);
        });

        box.scrollTop = box.scrollHeight;
      }

      function openChatModal(productId) {
        const product = getProductById(productId);
        if (!product) return;

        uiState.activeProductId = product.id;
        document.getElementById("chat-seller-name").textContent = product.seller;
        document.getElementById("chat-product-summary").textContent =
          product.title + " • " + formatRupiah(product.price);
        document.getElementById("offer-original-price").textContent = formatRupiah(product.price);
        document.getElementById("input-offer-amount").value = Math.max(
          5000,
          Math.round((product.price * 0.9) / 5000) * 5000
        );

        const sel = document.getElementById("select-barter-item");
        clearElement(sel);
        appState.myBarterItems.forEach(function (b) {
          const opt = document.createElement("option");
          opt.value = b.id;
          opt.textContent = b.title + " (Est. " + formatRupiah(b.value) + ")";
          sel.appendChild(opt);
        });

        setChatMode("text");
        renderChatMessages(product);
        openModal("modal-chat");
      }

      function simulateSellerResponse(product, action) {
        const thread = ensureChatThread(product);
        setTimeout(function () {
          if (action.type === "text") {
            thread.push({
              sender: "seller",
              type: "text",
              text: "Siap kak, barang sesuai foto real pict dan checklist kondisi. Bisa ketemuan COD di titik publik sekitar " + product.area + ".",
              time: "Baru saja"
            });
          } else if (action.type === "offer") {
            const ratio = action.amount / product.price;
            if (ratio >= 0.8) {
              thread.push({
                sender: "seller",
                type: "text",
                text: "Deal kak! Tawaran " + formatRupiah(action.amount) + " saya setujui. Yuk langsung atur jadwal COD aman!",
                time: "Baru saja",
                acceptedDeal: true,
                dealPrice: action.amount,
                dealLabel: formatRupiah(action.amount)
              });
            } else {
              const counter = Math.round((product.price * 0.88) / 5000) * 5000;
              thread.push({
                sender: "seller",
                type: "text",
                text: "Belum masuk kak kalau segitu. Gimana kalau tengah-tengah di " + formatRupiah(counter) + "? Kalau cocok langsung kita COD.",
                time: "Baru saja",
                acceptedDeal: true,
                dealPrice: counter,
                dealLabel: formatRupiah(counter)
              });
            }
          } else if (action.type === "barter") {
            if (!product.allowBarter) {
              thread.push({
                sender: "seller",
                type: "text",
                text: "Maaf kak, barang ini khusus dijual tunai/COD saja.",
                time: "Baru saja"
              });
            } else {
              thread.push({
                sender: "seller",
                type: "text",
                text:
                  "Cocok kak! Saya terima barter dengan \"" +
                  action.barterDesc +
                  "\" (+ tunai " +
                  formatRupiah(action.topup) +
                  "). Klik tombol di bawah untuk kunci titik temu COD.",
                time: "Baru saja",
                acceptedDeal: true,
                dealPrice: action.topup,
                dealLabel: "Barter + " + formatRupiah(action.topup)
              });
            }
          }
          saveState();
          if (uiState.activeProductId === product.id) {
            renderChatMessages(product);
          }
        }, 450);
      }

      function openCodModal(productId) {
        const product = getProductById(productId);
        if (!product) return;

        uiState.activeProductId = product.id;
        const finalPrice =
          uiState.agreedPriceOverride !== null ? uiState.agreedPriceOverride : product.price;

        document.getElementById("cod-item-title").textContent = product.title;
        document.getElementById("cod-agreed-price").textContent = formatRupiah(finalPrice);

        const tomorrow = new Date(Date.now() + 86400000);
        const yyyy = tomorrow.getFullYear();
        const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
        const dd = String(tomorrow.getDate()).padStart(2, "0");
        document.getElementById("cod-date").value = yyyy + "-" + mm + "-" + dd;

        openModal("modal-cod");
      }

      function updateBadges() {
        const pendingCount = appState.transactions.filter(function (t) {
          return t.status === "MENUNGGU_COD";
        }).length;
        document.getElementById("badge-tx-desktop").textContent = String(pendingCount);
        document.getElementById("badge-tx-mobile").textContent = String(pendingCount);
      }

      function renderTransactionsList() {
        const container = document.getElementById("transactions-list");
        clearElement(container);

        if (appState.transactions.length === 0) {
          const p = document.createElement("p");
          p.className = "text-xs sm:text-sm text-[#57534E] text-center py-8";
          p.textContent = "Belum ada jadwal COD aktif.";
          container.appendChild(p);
          return;
        }

        appState.transactions.forEach(function (tx) {
          const isCompleted = tx.status === "SELESAI";
          const card = document.createElement("div");
          card.className =
            "rounded-2xl border p-4 space-y-3 " +
            (isCompleted ? "bg-green-50/70 border-green-300" : "bg-[#FAF7F2] border-[#E7E0D5]");

          const head = document.createElement("div");
          head.className = "flex items-center justify-between gap-2";

          const idText = document.createElement("span");
          idText.className = "text-xs font-extrabold text-[#57534E]";
          idText.textContent = tx.id + " • " + tx.seller;

          const statusBadge = document.createElement("span");
          statusBadge.className =
            "px-2.5 py-1 rounded-xl text-[11px] font-extrabold " +
            (isCompleted ? "bg-[#15803D] text-white" : "bg-amber-100 text-amber-900");
          statusBadge.textContent = isCompleted ? "Dana Cair ke Penjual" : "Escrow Ditahan • Menunggu COD";

          head.appendChild(idText);
          head.appendChild(statusBadge);

          const title = document.createElement("h3");
          title.className = "text-sm font-extrabold text-[#1C1917]";
          title.textContent = tx.productTitle;

          const price = document.createElement("p");
          price.className = "text-base font-extrabold text-[#C2410C]";
          price.textContent = "Nominal Escrow: " + formatRupiah(tx.amount);

          const infoBox = document.createElement("div");
          infoBox.className = "text-xs bg-white p-3 rounded-xl border border-[#E7E0D5] space-y-1";

          const l1 = document.createElement("p");
          l1.className = "font-bold text-[#1C1917]";
          l1.textContent = "Titik Temu: " + tx.location;

          const l2 = document.createElement("p");
          l2.className = "text-[#57534E]";
          l2.textContent = "Jadwal: " + tx.date + " pukul " + tx.time + " WIB";

          infoBox.appendChild(l1);
          infoBox.appendChild(l2);

          card.appendChild(head);
          card.appendChild(title);
          card.appendChild(price);
          card.appendChild(infoBox);

          if (!isCompleted) {
            const otpBox = document.createElement("div");
            otpBox.className = "p-3.5 rounded-xl bg-white border-2 border-dashed border-[#15803D]/50 space-y-2.5";

            const topOtp = document.createElement("div");
            topOtp.className = "flex items-center justify-between";

            const lbl = document.createElement("span");
            lbl.className = "text-xs font-extrabold text-[#1C1917]";
            lbl.textContent = "Kode OTP 6-Digit Anda:";

            const code = document.createElement("span");
            code.className = "px-3 py-1 rounded-lg bg-green-100 text-[#15803D] font-mono text-sm font-extrabold tracking-widest";
            code.textContent = tx.otp;

            topOtp.appendChild(lbl);
            topOtp.appendChild(code);

            const form = document.createElement("form");
            form.className = "flex gap-2";

            const input = document.createElement("input");
            input.type = "text";
            input.maxLength = 6;
            input.inputMode = "numeric";
            input.placeholder = "Masukkan 6-digit OTP saat serah terima";
            input.className = "flex-1 px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7E0D5] text-xs font-mono font-bold tracking-wider";

            const btn = document.createElement("button");
            btn.type = "submit";
            btn.className = "px-3.5 py-2 rounded-xl bg-[#15803D] hover:bg-green-800 text-white text-xs font-extrabold shrink-0";
            btn.textContent = "Konfirmasi OTP";

            form.addEventListener("submit", function (e) {
              e.preventDefault();
              if (input.value.trim() === tx.otp) {
                tx.status = "SELESAI";

                const linkedProd = getProductById(tx.productId);
                if (linkedProd) {
                  linkedProd.codCount = (linkedProd.codCount || 1) + 1;
                  linkedProd.sellerStats = "Terverifikasi • " + linkedProd.codCount + " COD Sukses";
                }

                saveState();
                updateBadges();
                renderTransactionsList();
                showToast(
                  "Status: Dana Cair ke Penjual",
                  "OTP terverifikasi! Transaksi selesai. Silakan beri ulasan untuk penjual.",
                  "success"
                );
              } else {
                showToast("Kode OTP Salah", "Periksa kembali 6-digit kode OTP pada kartu transaksi.", "warn");
              }
            });

            form.appendChild(input);
            form.appendChild(btn);
            otpBox.appendChild(topOtp);
            otpBox.appendChild(form);
            card.appendChild(otpBox);
          } else {
            // RATING & ULASAN PASCA-OTP
            const reviewBox = document.createElement("div");
            reviewBox.className = "p-3.5 rounded-xl bg-white border border-green-200 space-y-2.5";

            if (tx.review) {
              const revTitle = document.createElement("p");
              revTitle.className = "text-xs font-extrabold text-[#15803D]";
              revTitle.textContent = "✓ Ulasan Terkirim (" + tx.review.stars + "/5 Bintang) • " + tx.review.tag;

              const revText = document.createElement("p");
              revText.className = "text-xs text-[#57534E]";
              revText.textContent = "\"" + tx.review.comment + "\"";

              reviewBox.appendChild(revTitle);
              reviewBox.appendChild(revText);
            } else {
              const revHeader = document.createElement("p");
              revHeader.className = "text-xs font-extrabold text-[#1C1917]";
              revHeader.textContent = "Beri Rating & Ulasan untuk " + tx.seller + ":";

              const revForm = document.createElement("form");
              revForm.className = "space-y-2";

              const rowControls = document.createElement("div");
              rowControls.className = "grid grid-cols-2 gap-2";

              const starSelect = document.createElement("select");
              starSelect.className = "px-2.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7E0D5] text-xs font-extrabold text-amber-800";
              ["5 Bintang (Sangat Puas)", "4 Bintang (Puas)", "3 Bintang (Cukup)"].forEach(function (label, idx) {
                const o = document.createElement("option");
                o.value = String(5 - idx);
                o.textContent = "★ " + label;
                starSelect.appendChild(o);
              });

              const tagSelect = document.createElement("select");
              tagSelect.className = "px-2.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7E0D5] text-xs font-bold text-[#1C1917]";
              ["Foto Sesuai Asli", "Minus Jujur Transparan", "Tepat Waktu COD"].forEach(function (tg) {
                const o = document.createElement("option");
                o.value = tg;
                o.textContent = tg;
                tagSelect.appendChild(o);
              });

              rowControls.appendChild(starSelect);
              rowControls.appendChild(tagSelect);

              const commentRow = document.createElement("div");
              commentRow.className = "flex gap-2";

              const commentInput = document.createElement("input");
              commentInput.type = "text";
              commentInput.maxLength = 120;
              commentInput.required = true;
              commentInput.placeholder = "Tulis pengalaman serah terima barang...";
              commentInput.className = "flex-1 px-3 py-2 rounded-xl bg-[#FAF7F2] border border-[#E7E0D5] text-xs";

              const sendRevBtn = document.createElement("button");
              sendRevBtn.type = "submit";
              sendRevBtn.className = "px-3.5 py-2 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] text-white text-xs font-extrabold shrink-0";
              sendRevBtn.textContent = "Kirim Ulasan";

              revForm.addEventListener("submit", function (e) {
                e.preventDefault();
                tx.review = {
                  stars: Number(starSelect.value),
                  tag: tagSelect.value,
                  comment: commentInput.value.trim()
                };
                saveState();
                renderTransactionsList();
                showToast("Ulasan Dipublikasikan", "Reputasi " + tx.seller + " telah diperbarui.", "success");
              });

              commentRow.appendChild(commentInput);
              commentRow.appendChild(sendRevBtn);

              revForm.appendChild(rowControls);
              revForm.appendChild(commentRow);
              reviewBox.appendChild(revHeader);
              reviewBox.appendChild(revForm);
            }

            card.appendChild(reviewBox);
          }

          container.appendChild(card);
        });
      }

      /* -------------------------------------------------------------------
       * 9. RENDER RIWAYAT TIKET PUSAT BANTUAN
       * ------------------------------------------------------------------- */
      function renderHelpTickets() {
        const box = document.getElementById("help-tickets-history");
        clearElement(box);
        if (!appState.helpTickets || appState.helpTickets.length === 0) return;

        const heading = document.createElement("p");
        heading.className = "text-xs font-extrabold text-[#1C1917]";
        heading.textContent = "Tiket Bantuan Terkirim (" + appState.helpTickets.length + "):";
        box.appendChild(heading);

        appState.helpTickets.slice(0, 3).forEach(function (tk) {
          const item = document.createElement("div");
          item.className = "p-2.5 rounded-xl bg-[#FAF7F2] border border-[#E7E0D5] text-xs";

          const top = document.createElement("div");
          top.className = "flex justify-between font-extrabold text-[#15803D]";

          const s1 = document.createElement("span");
          s1.textContent = tk.id + " • " + tk.topic;

          const s2 = document.createElement("span");
          s2.textContent = "Diterima";

          top.appendChild(s1);
          top.appendChild(s2);

          const msg = document.createElement("p");
          msg.className = "text-[#57534E] mt-1 line-clamp-2";
          msg.textContent = tk.message;

          item.appendChild(top);
          item.appendChild(msg);
          box.appendChild(item);
        });
      }

      /* -------------------------------------------------------------------
       * 10. INISIALISASI EVENT LISTENERS
       * ------------------------------------------------------------------- */
      function syncRadiusUI(newRadius) {
        uiState.maxRadius = Number(newRadius);
        const label = uiState.maxRadius >= 15 ? "Semua (≤ 15 km)" : "Maks " + uiState.maxRadius + " km";

        document.getElementById("radius-value-badge").textContent = label;
        document.getElementById("mobile-header-radius").textContent =
          uiState.maxRadius >= 15 ? "Semua" : "≤ " + uiState.maxRadius + " km";
        document.getElementById("radius-slider").value = String(uiState.maxRadius);

        document.querySelectorAll(".radius-pill").forEach(function (pill) {
          const active = Number(pill.getAttribute("data-radius")) === uiState.maxRadius;
          pill.className = active
            ? "radius-pill px-2.5 py-1.5 rounded-xl text-xs font-bold bg-[#C2410C] border border-[#C2410C] text-white transition-colors"
            : "radius-pill px-2.5 py-1.5 rounded-xl text-xs font-bold bg-white border border-[#E7E0D5] text-[#57534E] hover:border-[#C2410C] transition-colors";
        });

        renderCatalog();
      }

      function setSavedFilterState(enableSaved) {
        uiState.savedOnly = Boolean(enableSaved);
        const savedToggle = document.getElementById("toggle-saved-only");
        savedToggle.className = uiState.savedOnly
          ? "px-3.5 py-2 rounded-2xl text-xs font-extrabold bg-orange-100 border border-[#C2410C] text-orange-950 shrink-0 transition-colors flex items-center gap-1.5"
          : "px-3.5 py-2 rounded-2xl text-xs font-bold bg-[#FAF7F2] border border-[#E7E0D5] text-[#57534E] hover:border-[#C2410C] shrink-0 transition-colors flex items-center gap-1.5";
        renderCatalog();
      }

      function initEventListeners() {
        // Navigation View Triggers
        document.querySelectorAll("[data-nav-view]").forEach(function (btn) {
          btn.addEventListener("click", function () {
            switchView(btn.getAttribute("data-nav-view"));
          });
        });

        // Footer Shortcuts
        const footerRadiusBtn = document.getElementById("footer-radius-5");
        if (footerRadiusBtn) {
          footerRadiusBtn.addEventListener("click", function () {
            switchView("catalog");
            syncRadiusUI(5);
          });
        }

        const footerSavedBtn = document.getElementById("footer-saved-link");
        if (footerSavedBtn) {
          footerSavedBtn.addEventListener("click", function () {
            switchView("catalog");
            syncRadiusUI(15);
            setSavedFilterState(true);
          });
        }

        // Radius Controls
        document.getElementById("radius-slider").addEventListener("input", function (e) {
          syncRadiusUI(e.target.value);
        });
        document.querySelectorAll(".radius-pill").forEach(function (btn) {
          btn.addEventListener("click", function () {
            syncRadiusUI(btn.getAttribute("data-radius"));
          });
        });

        // Category Tabs
        document.querySelectorAll(".cat-tab").forEach(function (tab) {
          tab.addEventListener("click", function () {
            uiState.category = tab.getAttribute("data-cat");
            document.querySelectorAll(".cat-tab").forEach(function (t) {
              const active = t.getAttribute("data-cat") === uiState.category;
              t.className = active
                ? "cat-tab px-3.5 py-2 rounded-2xl text-xs font-extrabold bg-[#1C1917] text-white shrink-0 transition-colors"
                : "cat-tab px-3.5 py-2 rounded-2xl text-xs font-bold bg-[#FAF7F2] border border-[#E7E0D5] text-[#57534E] hover:border-[#C2410C] shrink-0 transition-colors";
            });
            renderCatalog();
          });
        });

        // Toggle Barter Only
        const barterToggle = document.getElementById("toggle-barter-only");
        barterToggle.addEventListener("click", function () {
          uiState.barterOnly = !uiState.barterOnly;
          barterToggle.className = uiState.barterOnly
            ? "px-3.5 py-2 rounded-2xl text-xs font-extrabold bg-amber-100 border border-[#D97706] text-amber-950 shrink-0 transition-colors flex items-center gap-1.5"
            : "px-3.5 py-2 rounded-2xl text-xs font-bold bg-[#FAF7F2] border border-[#E7E0D5] text-[#57534E] hover:border-[#D97706] shrink-0 transition-colors flex items-center gap-1.5";
          renderCatalog();
        });

        // Toggle Saved / Bookmark Only
        document.getElementById("toggle-saved-only").addEventListener("click", function () {
          setSavedFilterState(!uiState.savedOnly);
        });

        // Search & Sort
        document.getElementById("search-input").addEventListener("input", function (e) {
          uiState.searchQuery = e.target.value;
          renderCatalog();
        });
        document.getElementById("sort-select").addEventListener("change", function (e) {
          uiState.sortBy = e.target.value;
          renderCatalog();
        });
        document.getElementById("btn-reset-filters").addEventListener("click", function () {
          uiState.searchQuery = "";
          uiState.barterOnly = false;
          document.getElementById("search-input").value = "";
          barterToggle.className = "px-3.5 py-2 rounded-2xl text-xs font-bold bg-[#FAF7F2] border border-[#E7E0D5] text-[#57534E] hover:border-[#D97706] shrink-0 transition-colors flex items-center gap-1.5";
          setSavedFilterState(false);
          syncRadiusUI(15);
        });

        // Close Modals
        document.querySelectorAll("[data-close-modal]").forEach(function (btn) {
          btn.addEventListener("click", function () {
            closeModal(btn.getAttribute("data-close-modal"));
          });
        });
        ["modal-detail", "modal-chat", "modal-cod", "modal-sell", "modal-transactions"].forEach(function (mId) {
          const el = document.getElementById(mId);
          el.addEventListener("click", function (e) {
            if (e.target === el) closeModal(mId);
          });
        });

        // Detail Modal Bookmark & Share
        document.getElementById("btn-detail-bookmark").addEventListener("click", function () {
          if (uiState.activeProductId) {
            toggleProductBookmark(uiState.activeProductId);
          }
        });

        document.getElementById("btn-detail-share").addEventListener("click", function () {
          const item = getProductById(uiState.activeProductId);
          if (!item) return;
          const shareText =
            "[Lungsuran Lokal] " +
            item.title +
            " (" +
            item.conditionScore +
            "% Mulus) — " +
            formatRupiah(item.price) +
            " | Lokasi: " +
            item.area +
            " (" +
            item.distanceKm +
            " km). Minus jujur: " +
            item.minusNote;

          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(shareText).then(function () {
              showToast("Info Produk Disalin", "Siap ditempel ke WhatsApp atau grup komunitas!", "success");
            });
          } else {
            showToast("Info Produk Siap", shareText, "info");
          }
        });

        // Detail Modal Chat & COD Buttons
        document.getElementById("btn-detail-chat").addEventListener("click", function () {
          const id = uiState.activeProductId;
          closeModal("modal-detail");
          openChatModal(id);
        });
        document.getElementById("btn-detail-cod").addEventListener("click", function () {
          const id = uiState.activeProductId;
          closeModal("modal-detail");
          openCodModal(id);
        });

        // Chat Mode Switcher & Quick Discounts
        document.querySelectorAll(".chat-mode-btn").forEach(function (btn) {
          btn.addEventListener("click", function () {
            setChatMode(btn.getAttribute("data-chat-mode"));
          });
        });

        document.querySelectorAll(".quick-discount-btn").forEach(function (btn) {
          btn.addEventListener("click", function () {
            const product = getProductById(uiState.activeProductId);
            if (!product) return;
            const pct = Number(btn.getAttribute("data-discount"));
            const discounted = Math.max(5000, Math.round((product.price * (100 - pct)) / 100 / 1000) * 1000);
            document.getElementById("input-offer-amount").value = discounted;
          });
        });

        // Chat Text Form
        document.getElementById("form-chat-text").addEventListener("submit", function (e) {
          e.preventDefault();
          const input = document.getElementById("input-chat-text");
          const txt = input.value.trim();
          const product = getProductById(uiState.activeProductId);
          if (!txt || !product) return;

          ensureChatThread(product).push({ sender: "buyer", type: "text", text: txt, time: "Baru saja" });
          input.value = "";
          saveState();
          renderChatMessages(product);
          simulateSellerResponse(product, { type: "text" });
        });

        // Chat Offer Form
        document.getElementById("form-chat-offer").addEventListener("submit", function (e) {
          e.preventDefault();
          const amount = Number(document.getElementById("input-offer-amount").value);
          const product = getProductById(uiState.activeProductId);
          if (!product || amount < 5000) return;

          ensureChatThread(product).push({
            sender: "buyer",
            type: "offer",
            text: "Saya menawar harga sebesar " + formatRupiah(amount) + " untuk COD langsung.",
            time: "Baru saja"
          });
          saveState();
          renderChatMessages(product);
          simulateSellerResponse(product, { type: "offer", amount: amount });
        });

        // Chat Barter Mode Switch & Form
        document.getElementById("select-barter-mode").addEventListener("change", function (e) {
          const isCustom = e.target.value === "custom";
          document.getElementById("barter-existing-wrap").classList.toggle("hidden", isCustom);
          document.getElementById("barter-custom-wrap").classList.toggle("hidden", !isCustom);
        });

        document.getElementById("custom-barter-photo").addEventListener("change", function (e) {
          const f = e.target.files && e.target.files[0];
          if (f) {
            uiState.customBarterPhotoName = f.name;
            document.getElementById("custom-barter-photo-label").textContent = "✓ " + f.name;
          }
        });

        document.getElementById("form-chat-barter").addEventListener("submit", function (e) {
          e.preventDefault();
          const product = getProductById(uiState.activeProductId);
          if (!product) return;

          const mode = document.getElementById("select-barter-mode").value;
          const topup = Math.max(0, Number(document.getElementById("input-barter-topup").value) || 0);
          let barterDesc = "";

          if (mode === "existing") {
            const id = document.getElementById("select-barter-item").value;
            const found = appState.myBarterItems.find(function (b) {
              return b.id === id;
            });
            barterDesc = found ? found.title : "Barang Koleksi Pembeli";
          } else {
            const cTitle = document.getElementById("custom-barter-title").value.trim();
            const cCond = document.getElementById("custom-barter-cond").value.trim();
            if (!cTitle || !cCond) {
              showToast("Lengkapi Detail Barter", "Isi nama barang tukar dan kondisi fisiknya terlebih dahulu.", "warn");
              return;
            }
            const photoTag = uiState.customBarterPhotoName ? " [Foto: " + uiState.customBarterPhotoName + "]" : "";
            barterDesc = cTitle + " (" + cCond + ")" + photoTag;
            appState.myBarterItems.unshift({ id: "brt-" + Date.now(), title: barterDesc, value: 150000 });
          }

          ensureChatThread(product).push({
            sender: "buyer",
            type: "barter",
            text: "Saya ajukan barter dengan: \"" + barterDesc + "\" + tambahan tunai " + formatRupiah(topup) + ".",
            time: "Baru saja"
          });
          saveState();
          renderChatMessages(product);
          simulateSellerResponse(product, { type: "barter", barterDesc: barterDesc, topup: topup });
        });

        // COD Schedule Submit
        document.getElementById("form-cod-schedule").addEventListener("submit", function (e) {
          e.preventDefault();
          const product = getProductById(uiState.activeProductId);
          if (!product) return;

          const loc = document.getElementById("cod-location-select").value;
          const dateVal = document.getElementById("cod-date").value;
          const timeVal = document.getElementById("cod-time").value;
          const finalPrice =
            uiState.agreedPriceOverride !== null ? uiState.agreedPriceOverride : product.price;
          const otpCode = generateSecureOtp();

          appState.transactions.unshift({
            id: "TX-" + Math.floor(1000 + Math.random() * 9000),
            productId: product.id,
            productTitle: product.title,
            seller: product.seller,
            amount: finalPrice,
            location: loc,
            date: dateVal,
            time: timeVal,
            otp: otpCode,
            status: "MENUNGGU_COD",
            review: null
          });

          saveState();
          updateBadges();
          closeModal("modal-cod");
          renderTransactionsList();
          openModal("modal-transactions");
          showToast("Jadwal COD & OTP Terbit!", "Kode OTP " + otpCode + " siap digunakan saat serah terima barang.", "success");
        });

        // Open Sell Modal & Photo Validation
        function openSellForm() {
          uiState.sellPhotoReady = false;
          uiState.sellPhotoDataUrl = createProductArtwork("#E7E0D5", "#D6CBB9", "BELUM ADA FOTO", "Pilih Foto Real Pict");
          document.getElementById("sell-photo-preview").src = uiState.sellPhotoDataUrl;
          const st = document.getElementById("sell-photo-status");
          st.textContent = "Wajib pilih foto";
          st.className = "px-2 py-0.5 rounded-lg bg-amber-100 text-amber-900 text-[11px] font-bold";
          openModal("modal-sell");
        }

        document.getElementById("btn-open-sell-desktop").addEventListener("click", openSellForm);
        document.getElementById("btn-open-sell-mobile-top").addEventListener("click", openSellForm);
        document.getElementById("btn-about-sell").addEventListener("click", openSellForm);

        document.getElementById("btn-use-sample-realpict").addEventListener("click", function () {
          uiState.sellPhotoReady = true;
          uiState.sellPhotoDataUrl = createProductArtwork("#C2410C", "#7C2D12", "REAL PICT VERIFIED", "Foto Asli Kamera");
          document.getElementById("sell-photo-preview").src = uiState.sellPhotoDataUrl;
          const st = document.getElementById("sell-photo-status");
          st.textContent = "✓ Foto Real Pict Siap";
          st.className = "px-2 py-0.5 rounded-lg bg-green-100 text-[#15803D] text-[11px] font-extrabold";
        });

        document.getElementById("sell-photo-input").addEventListener("change", function (e) {
          const file = e.target.files && e.target.files[0];
          if (!file || !file.type.startsWith("image/")) {
            showToast("Format Tidak Valid", "Pilih berkas foto asli (JPG/PNG/WebP).", "warn");
            return;
          }
          const reader = new FileReader();
          reader.onload = function (ev) {
            const res = ev.target && ev.target.result;
            if (typeof res === "string" && res.startsWith("data:image/")) {
              uiState.sellPhotoReady = true;
              uiState.sellPhotoDataUrl = res;
              document.getElementById("sell-photo-preview").src = res;
              const st = document.getElementById("sell-photo-status");
              st.textContent = "✓ Foto Real Pict Siap";
              st.className = "px-2 py-0.5 rounded-lg bg-green-100 text-[#15803D] text-[11px] font-extrabold";
            }
          };
          reader.readAsDataURL(file);
        });

        document.getElementById("form-add-product").addEventListener("submit", function (e) {
          e.preventDefault();

          if (!uiState.sellPhotoReady) {
            showToast("Foto Real Pict Wajib", "Unggah foto asli atau klik tombol foto kamera terverifikasi.", "warn");
            return;
          }

          const checkedList = [];
          document.querySelectorAll(".sell-check-item:checked").forEach(function (cb) {
            checkedList.push(cb.value);
          });

          if (checkedList.length < 2) {
            showToast("Checklist Kondisi Kurang", "Centang minimal 2 poin checklist kondisi fisik transparan.", "warn");
            return;
          }

          const title = document.getElementById("sell-title").value.trim();
          const type = document.getElementById("sell-type").value;
          const price = Number(document.getElementById("sell-price").value);
          const distParts = document.getElementById("sell-distance").value.split("|");
          const score = Number(document.getElementById("sell-score").value);
          const minus = document.getElementById("sell-minus").value.trim();
          const desc = document.getElementById("sell-desc").value.trim();

          const newItem = {
            id: "prd-" + Date.now(),
            title: title,
            type: type,
            price: price,
            distanceKm: Number(distParts[0]) || 1.2,
            area: distParts[1] || "Langsa Kota",
            conditionScore: score,
            seller: "Anda (Penjual Lokal)",
            codCount: 1,
            sellerStats: "Akun Aktif • Real Pict Verified",
            allowOffer: document.getElementById("sell-allow-offer").checked,
            allowBarter: document.getElementById("sell-allow-barter").checked,
            minusNote: minus,
            checklist: checkedList,
            description: desc,
            image: uiState.sellPhotoDataUrl
          };

          appState.products.unshift(newItem);
          saveState();
          e.target.reset();
          closeModal("modal-sell");
          switchView("catalog");
          setSavedFilterState(false);
          syncRadiusUI(Math.max(uiState.maxRadius, Math.ceil(newItem.distanceKm)));
          showToast("Lungsuran Berhasil Tayang!", "\"" + title + "\" sudah tampil di katalog sekitar.", "success");
        });

        // Open Transactions Modal
        function openTxModal() {
          renderTransactionsList();
          openModal("modal-transactions");
        }
        document.getElementById("btn-open-transactions").addEventListener("click", openTxModal);
        document.getElementById("mob-nav-tx").addEventListener("click", openTxModal);

        // FAQ Accordion
        document.querySelectorAll(".faq-trigger").forEach(function (btn) {
          btn.addEventListener("click", function () {
            const item = btn.closest(".faq-item");
            const content = item.querySelector(".faq-content");
            const icon = item.querySelector(".faq-icon");
            const isHidden = content.classList.contains("hidden");
            content.classList.toggle("hidden", !isHidden);
            icon.textContent = isHidden ? "−" : "+";
          });
        });

        // Help Form Ticket Submission
        document.getElementById("form-help-ticket").addEventListener("submit", function (e) {
          e.preventDefault();
          const name = document.getElementById("help-name").value.trim();
          const topic = document.getElementById("help-topic").value;
          const txId = document.getElementById("help-tx-id").value.trim();
          const msg = document.getElementById("help-message").value.trim();
          if (!name || !msg) return;

          const ticketId = "HLP-" + Math.floor(1000 + Math.random() * 9000);
          appState.helpTickets = appState.helpTickets || [];
          appState.helpTickets.unshift({
            id: ticketId,
            name: name,
            topic: topic,
            txId: txId,
            message: msg
          });

          saveState();
          renderHelpTickets();
          e.target.reset();
          showToast(
            "Tiket Bantuan Terkirim (" + ticketId + ")",
            "Terima kasih " + name + ", tim bantuan Lungsuran segera menindaklanjuti laporan Anda.",
            "success"
          );
        });
      }

      // Jalankan Aplikasi
      initEventListeners();
      updateBadges();
      renderSavedBadge();
      renderCatalog();
      renderHelpTickets();
    })();
