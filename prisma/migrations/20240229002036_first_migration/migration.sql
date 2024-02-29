-- CreateTable
CREATE TABLE "cars" (
    "id" TEXT NOT NULL,
    "make" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "year" TEXT NOT NULL,
    "kilometer" INTEGER NOT NULL,
    "fuel_type" TEXT NOT NULL,
    "transmission" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "owner" TEXT NOT NULL,
    "seller_type" TEXT NOT NULL,
    "engine" TEXT NOT NULL,
    "max_power" TEXT NOT NULL,
    "max_torque" TEXT NOT NULL,
    "drivetrain" TEXT NOT NULL,
    "length" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "seating_capacity" DOUBLE PRECISION NOT NULL,
    "fuel_tank_capacity" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cars_id_key" ON "cars"("id");
