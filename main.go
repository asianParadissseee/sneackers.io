package main

import (
	"github.com/gofiber/fiber/middleware/cors"
	"github.com/gofiber/fiber/v2"
	"log"
)

func main() {
	app := fiber.New()
	app.Use(cors.New())
	api := app.Group("/api")

	api.Get("/check", func(ctx *fiber.Ctx) error {
		return ctx.Status(fiber.StatusOK).JSON(fiber.Map{
			"status":  "success",
			"message": "Welcome to my api",
		})
	})

	log.Fatal(app.Listen(":8000"))
}
