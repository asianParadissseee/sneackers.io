package main

import "github.com/gofiber/fiber/v2"

func main() {
	app := fiber.New()

	app.Get("/", func(ctx *fiber.Ctx) error {
		return ctx.SendString("Hello, World!")
	})

	app.Get("/messages", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Hello its my message",
		})
	})

	app.Listen(":5050")
}
