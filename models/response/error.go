package response
// PR Test

// Error Response
type Error struct {
	Code    int    `json:"code"`
	Message string `json:"message"`
}
