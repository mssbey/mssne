"use client";

import Image from "next/image";
import { useActionState, useEffect, useMemo, useState, useTransition } from "react";
import { Boxes, FolderPlus, LoaderCircle, PackagePlus, Pencil, Search, Trash2, X } from "lucide-react";
import {
  deletePromotionProduct,
  savePromotionCategory,
  savePromotionProduct,
  type PromotionState,
} from "@/app/admin/(panel)/promotions/actions";
import { ImagePicker, type PickerMedia } from "./ImagePicker";

export type PromotionCategoryRow = {
  id: string; name: string; slug: string; description: string; image: string;
  color: string; icon: string; active: boolean; productCount: number;
};

export type PromotionProductRow = {
  id: string; name: string; slug: string; description: string; categoryId: string;
  categoryName: string; features: string[]; minQty: number; image: string;
  gallery: string[]; status: string; featured: boolean;
};

export function PromotionManager({
  categories,
  products,
  media,
}: {
  categories: PromotionCategoryRow[];
  products: PromotionProductRow[];
  media: PickerMedia[];
}) {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [editingProduct, setEditingProduct] = useState<PromotionProductRow | null | undefined>(undefined);
  const [editingCategory, setEditingCategory] = useState<PromotionCategoryRow | null | undefined>(undefined);
  const [deleting, startDelete] = useTransition();
  const [productState, productAction, productPending] = useActionState<PromotionState, FormData>(savePromotionProduct, {});
  const [categoryState, categoryAction, categoryPending] = useActionState<PromotionState, FormData>(savePromotionCategory, {});
  useEffect(() => { if (productState.ok) setEditingProduct(undefined); }, [productState.ok]);
  useEffect(() => { if (categoryState.ok) setEditingCategory(undefined); }, [categoryState.ok]);
  const filtered = useMemo(() => products.filter((item) => {
    const categoryMatch = categoryFilter === "all" || item.categoryId === categoryFilter;
    const queryMatch = `${item.name} ${item.categoryName} ${item.description}`.toLocaleLowerCase("tr-TR").includes(query.toLocaleLowerCase("tr-TR"));
    return categoryMatch && queryMatch;
  }), [products, query, categoryFilter]);

  return (
    <>
      <div className="admin-promo-summary">
        <div><Boxes size={20} /><span><strong>{categories.length}</strong>Kategori</span></div>
        <div><PackagePlus size={20} /><span><strong>{products.length}</strong>Ürün</span></div>
        <div className="admin-promo-buttons"><button className="admin-secondary-button" onClick={() => setEditingCategory(null)}><FolderPlus size={16} /> Yeni kategori</button><button className="admin-primary-button" onClick={() => setEditingProduct(null)}><PackagePlus size={16} /> Yeni ürün</button></div>
      </div>
      <div className="admin-promo-categories">
        <button className={categoryFilter === "all" ? "active" : ""} onClick={() => setCategoryFilter("all")}>Tümü <span>{products.length}</span></button>
        {categories.map((category) => <button key={category.id} className={categoryFilter === category.id ? "active" : ""} onClick={() => setCategoryFilter(category.id)}><i style={{ background: category.color }} />{category.name}<span>{category.productCount}</span><b onClick={(event) => { event.stopPropagation(); setEditingCategory(category); }}><Pencil size={11} /></b></button>)}
      </div>
      <div className="admin-toolbar"><label className="admin-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Promosyon ürünü ara..." /></label></div>
      <div className="admin-promo-product-grid">
        {filtered.map((product) => (
          <article key={product.id}>
            <div className="admin-promo-image">{product.image ? <Image src={product.image} alt={product.name} fill sizes="260px" /> : <PackagePlus size={26} />}{product.featured && <span>Öne çıkan</span>}</div>
            <div className="admin-promo-card-body"><small>{product.categoryName}</small><h3>{product.name}</h3><p>{product.description}</p><div><span className={`admin-status status-${product.status.toLowerCase()}`}>{product.status}</span><em>Min. {product.minQty}</em></div><footer><button onClick={() => setEditingProduct(product)}><Pencil size={14} /> Düzenle</button><button className="danger" disabled={deleting} onClick={() => { if (confirm(`“${product.name}” ürünü silinsin mi?`)) startDelete(async () => deletePromotionProduct(product.id)); }}><Trash2 size={14} /></button></footer></div>
          </article>
        ))}
        {!filtered.length && <div className="admin-empty admin-promo-empty"><PackagePlus size={25} /><strong>Ürün bulunamadı</strong><span>Filtreyi değiştirin veya yeni ürün ekleyin.</span></div>}
      </div>
      {editingProduct !== undefined && (
        <div className="admin-modal-layer">
          <button className="admin-modal-backdrop" onClick={() => setEditingProduct(undefined)} />
          <section className="admin-modal admin-product-modal">
            <header><div><span>Promosyon kataloğu</span><h2>{editingProduct ? "Ürünü düzenle" : "Yeni ürün ekle"}</h2></div><button onClick={() => setEditingProduct(undefined)}><X size={20} /></button></header>
            <form action={productAction} className="admin-form">
              {editingProduct && <input type="hidden" name="id" value={editingProduct.id} />}
              <label><span>Ürün adı</span><input name="name" required defaultValue={editingProduct?.name} /></label>
              <label><span>Slug</span><input name="slug" defaultValue={editingProduct?.slug} placeholder="otomatik-olusturulur" /></label>
              <label><span>Kategori</span><select name="categoryId" required defaultValue={editingProduct?.categoryId || categories[0]?.id}>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select></label>
              <label><span>Minimum adet</span><input name="minQty" type="number" min={1} defaultValue={editingProduct?.minQty || 25} /></label>
              <label><span>Durum</span><select name="status" defaultValue={editingProduct?.status || "DRAFT"}><option value="DRAFT">Taslak</option><option value="PUBLISHED">Yayında</option><option value="PASSIVE">Pasif</option></select></label>
              <label className="admin-check"><input name="featured" type="checkbox" defaultChecked={editingProduct?.featured} /> Öne çıkan ürün</label>
              <label><span>Açıklama</span><textarea name="description" required rows={4} defaultValue={editingProduct?.description} /></label>
              <label><span>Özellikler</span><textarea name="features" rows={5} defaultValue={editingProduct?.features.join("\n")} placeholder={"Her satıra bir özellik\nLogo baskısı\nPaslanmaz gövde"} /></label>
              <ImagePicker name="imageUrl" label="Ürün kapak görseli" media={media} defaultValue={editingProduct?.image} />
              <ImagePicker name="galleryUrls" label="Ürün galerisi" media={media} defaultValue={editingProduct?.gallery.join("\n")} multiple />
              {productState.error && <p className="admin-form-error">{productState.error}</p>}
              <footer><button type="button" className="admin-secondary-button" onClick={() => setEditingProduct(undefined)}>İptal</button><button className="admin-primary-button" disabled={productPending}>{productPending ? <><LoaderCircle className="spin" size={16} /> Kaydediliyor</> : "Ürünü kaydet"}</button></footer>
            </form>
          </section>
        </div>
      )}
      {editingCategory !== undefined && (
        <div className="admin-modal-layer">
          <button className="admin-modal-backdrop" onClick={() => setEditingCategory(undefined)} />
          <section className="admin-modal">
            <header><div><span>Promosyon kataloğu</span><h2>{editingCategory ? "Kategoriyi düzenle" : "Yeni kategori"}</h2></div><button onClick={() => setEditingCategory(undefined)}><X size={20} /></button></header>
            <form action={categoryAction} className="admin-form">
              {editingCategory && <input type="hidden" name="id" value={editingCategory.id} />}
              <label><span>Kategori adı</span><input name="name" required defaultValue={editingCategory?.name} /></label>
              <label><span>Slug</span><input name="slug" defaultValue={editingCategory?.slug} /></label>
              <label><span>İkon adı</span><input name="icon" defaultValue={editingCategory?.icon || "Gift"} /></label>
              <label><span>Renk</span><input name="color" type="color" defaultValue={editingCategory?.color || "#EC4899"} /></label>
              <label><span>Açıklama</span><textarea name="description" rows={4} defaultValue={editingCategory?.description} /></label>
              <label className="admin-check"><input name="active" type="checkbox" defaultChecked={editingCategory?.active ?? true} /> Kategori aktif</label>
              <ImagePicker name="imageUrl" label="Kategori görseli" media={media} defaultValue={editingCategory?.image} />
              {categoryState.error && <p className="admin-form-error">{categoryState.error}</p>}
              <footer><button type="button" className="admin-secondary-button" onClick={() => setEditingCategory(undefined)}>İptal</button><button className="admin-primary-button" disabled={categoryPending}>{categoryPending ? "Kaydediliyor" : "Kategoriyi kaydet"}</button></footer>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
