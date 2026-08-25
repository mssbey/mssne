-- CreateTable
CREATE TABLE "PromotionCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "icon" TEXT,
    "color" TEXT NOT NULL DEFAULT '#EC4899',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME
);

-- CreateTable
CREATE TABLE "PromotionProduct" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "categoryId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" JSONB NOT NULL,
    "minQty" INTEGER NOT NULL DEFAULT 1,
    "image" TEXT,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "active" BOOLEAN NOT NULL DEFAULT true,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "seoTitle" TEXT,
    "seoDescription" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "deletedAt" DATETIME,
    CONSTRAINT "PromotionProduct_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "PromotionCategory" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PromotionImage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "PromotionImage_productId_fkey" FOREIGN KEY ("productId") REFERENCES "PromotionProduct" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "PromotionCategory_slug_key" ON "PromotionCategory"("slug");

-- CreateIndex
CREATE INDEX "PromotionCategory_active_sortOrder_idx" ON "PromotionCategory"("active", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "PromotionProduct_slug_key" ON "PromotionProduct"("slug");

-- CreateIndex
CREATE INDEX "PromotionProduct_categoryId_status_sortOrder_idx" ON "PromotionProduct"("categoryId", "status", "sortOrder");

-- CreateIndex
CREATE INDEX "PromotionImage_productId_sortOrder_idx" ON "PromotionImage"("productId", "sortOrder");
