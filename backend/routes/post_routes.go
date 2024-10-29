package routes

import (
	"go-restful-api/controllers"

	"github.com/gin-gonic/gin"
)

func RegisterPostRoutes(router *gin.Engine) {
	postRoutes := router.Group("/posts")
	{
		postRoutes.GET("/", controllers.GetPosts)
		postRoutes.GET("/:id", controllers.GetPost)
		postRoutes.POST("/", controllers.CreatePost)
		postRoutes.PUT("/:id", controllers.UpdatePost)
		postRoutes.DELETE("/:id", controllers.DeletePost)
	}
}
