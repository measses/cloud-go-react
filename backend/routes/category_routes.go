package routes

import (
	"go-restful-api/controllers"

	"github.com/gin-gonic/gin"
)

func RegisterCategoryRoutes(router *gin.Engine) {
	categoryRoutes := router.Group("/categories")
	{
		categoryRoutes.GET("/", controllers.GetCategories)
		categoryRoutes.GET("/:id", controllers.GetCategory)
		categoryRoutes.POST("/", controllers.CreateCategory)
		categoryRoutes.PUT("/:id", controllers.UpdateCategory)
		categoryRoutes.DELETE("/:id", controllers.DeleteCategory)
	}
}
