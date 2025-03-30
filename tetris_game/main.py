import pygame
import random
import os

# 初始化Pygame
pygame.init()

# 颜色定义
BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
CYAN = (0, 255, 255)
YELLOW = (255, 255, 0)
MAGENTA = (255, 0, 255)
RED = (255, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)
ORANGE = (255, 165, 0)

# 游戏设置
BLOCK_SIZE = 30
GRID_WIDTH = 10
GRID_HEIGHT = 20
SCREEN_WIDTH = BLOCK_SIZE * (GRID_WIDTH + 6)
SCREEN_HEIGHT = BLOCK_SIZE * GRID_HEIGHT

# 创建游戏窗口
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption('俄罗斯方块')

# 游戏时钟
clock = pygame.time.Clock()

# 定义字体
try:
    # 尝试使用自定义字体
    FONT = pygame.font.Font(os.path.join('fonts', 'simhei.ttf'), 36)
    SMALL_FONT = pygame.font.Font(os.path.join('fonts', 'simhei.ttf'), 24)
except:
    try:
        # 如果自定义字体不可用，尝试使用系统字体
        FONT = pygame.font.SysFont('simhei', 36)
        SMALL_FONT = pygame.font.SysFont('simhei', 24)
    except:
        # 如果都不可用，使用默认字体
        FONT = pygame.font.Font(None, 36)
        SMALL_FONT = pygame.font.Font(None, 24)

# 定义方块形状
SHAPES = [
    [[1, 1, 1, 1]],  # I
    [[1, 1], [1, 1]],  # O
    [[1, 1, 1], [0, 1, 0]],  # T
    [[1, 1, 1], [1, 0, 0]],  # L
    [[1, 1, 1], [0, 0, 1]],  # J
    [[1, 1, 0], [0, 1, 1]],  # S
    [[0, 1, 1], [1, 1, 0]]   # Z
]

# 定义方块颜色
SHAPE_COLORS = [CYAN, YELLOW, MAGENTA, ORANGE, BLUE, GREEN, RED]

class Tetromino:
    def __init__(self):
        self.shape_idx = random.randint(0, len(SHAPES) - 1)
        self.shape = SHAPES[self.shape_idx]
        self.color = SHAPE_COLORS[self.shape_idx]
        self.x = GRID_WIDTH // 2 - len(self.shape[0]) // 2
        self.y = 0

    def rotate(self):
        # 矩阵转置后反转每一行来实现旋转
        self.shape = [list(row) for row in zip(*self.shape[::-1])]

class Game:
    def __init__(self):
        self.reset_game()

    def reset_game(self):
        self.grid = [[0 for _ in range(GRID_WIDTH)] for _ in range(GRID_HEIGHT)]
        self.current_piece = None
        self.next_piece = None
        self.game_over = False
        self.score = 0
        self.level = 1
        self.lines_cleared = 0
        self.fall_time = 0
        self.fall_speed = 500  # 初始下落速度（毫秒）
        self.paused = False
        self.new_piece()

    def new_piece(self):
        if self.next_piece is None:
            self.next_piece = Tetromino()
        self.current_piece = self.next_piece
        self.next_piece = Tetromino()
        if self.check_collision():
            self.game_over = True

    def check_collision(self):
        for y, row in enumerate(self.current_piece.shape):
            for x, cell in enumerate(row):
                if cell:
                    if (self.current_piece.x + x < 0 or
                        self.current_piece.x + x >= GRID_WIDTH or
                        self.current_piece.y + y >= GRID_HEIGHT or
                        (self.current_piece.y + y >= 0 and 
                         self.grid[self.current_piece.y + y][self.current_piece.x + x])):
                        return True
        return False

    def lock_piece(self):
        for y, row in enumerate(self.current_piece.shape):
            for x, cell in enumerate(row):
                if cell:
                    self.grid[self.current_piece.y + y][self.current_piece.x + x] = self.current_piece.color

    def clear_lines(self):
        lines_to_clear = []
        # 找出需要清除的行
        for y in range(GRID_HEIGHT):
            if all(self.grid[y]):
                lines_to_clear.append(y)
        
        if lines_to_clear:
            # 一次性清除所有行
            for y in lines_to_clear:
                self.grid.pop(y)
                self.grid.insert(0, [0 for _ in range(GRID_WIDTH)])
            
            # 计算得分和升级
            lines_cleared = len(lines_to_clear)
            self.lines_cleared += lines_cleared
            self.score += lines_cleared * 100 * self.level
            # 每清除10行升一级
            self.level = self.lines_cleared // 10 + 1
            self.fall_speed = max(50, 500 - (self.level - 1) * 50)  # 速度随等级提升而加快

    def move_down(self):
        self.current_piece.y += 1
        if self.check_collision():
            self.current_piece.y -= 1
            self.lock_piece()
            self.clear_lines()
            self.new_piece()

def draw_grid(screen, grid):
    # 绘制网格线
    for x in range(GRID_WIDTH + 1):
        pygame.draw.line(screen, WHITE, 
                        (x * BLOCK_SIZE, 0), 
                        (x * BLOCK_SIZE, SCREEN_HEIGHT))
    for y in range(GRID_HEIGHT + 1):
        pygame.draw.line(screen, WHITE, 
                        (0, y * BLOCK_SIZE), 
                        (GRID_WIDTH * BLOCK_SIZE, y * BLOCK_SIZE))
    
    # 绘制已固定的方块
    for y, row in enumerate(grid):
        for x, color in enumerate(row):
            if color:
                pygame.draw.rect(screen, color,
                               (x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE - 1, BLOCK_SIZE - 1))

def draw_piece(screen, piece, offset_x, offset_y):
    if piece:
        for y, row in enumerate(piece.shape):
            for x, cell in enumerate(row):
                if cell:
                    pygame.draw.rect(screen, piece.color,
                                   (offset_x + x * BLOCK_SIZE,
                                    offset_y + y * BLOCK_SIZE,
                                    BLOCK_SIZE - 1, BLOCK_SIZE - 1))

def draw_next_piece(screen, piece):
    # 绘制"下一个"文字
    next_text = SMALL_FONT.render('下一个:', True, WHITE)
    screen.blit(next_text, (GRID_WIDTH * BLOCK_SIZE + 10, 100))
    
    # 绘制下一个方块
    if piece:
        draw_piece(screen, piece, 
                  GRID_WIDTH * BLOCK_SIZE + 10, 
                  150)

def main():
    game = Game()
    running = True
    fast_fall = False
    fast_fall_speed = 30  # 快速下落的速度（毫秒）
    fast_fall_time = 0
    key_repeat_delay = 50  # 按键重复延迟（毫秒）
    key_repeat_interval = 16  # 按键重复间隔（毫秒）
    key_down_time = 0
    last_move_time = 0

    while running:
        # 处理事件
        current_time = pygame.time.get_ticks()
        keys = pygame.key.get_pressed()
        
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_r:  # 重新开始
                    game.reset_game()
                elif event.key == pygame.K_p:  # 暂停/继续
                    if not game.game_over:  # 只在非游戏结束状态下允许暂停
                        game.paused = not game.paused
                        if game.paused:
                            game.fall_time = 0  # 重置下落时间

        # 只在非暂停和非游戏结束状态下处理按键
        if not game.game_over and not game.paused:
            # 处理左右移动
            if keys[pygame.K_LEFT]:
                if current_time - last_move_time > 100:  # 左右移动间隔
                    game.current_piece.x -= 1
                    if game.check_collision():
                        game.current_piece.x += 1
                    last_move_time = current_time
            elif keys[pygame.K_RIGHT]:
                if current_time - last_move_time > 100:  # 左右移动间隔
                    game.current_piece.x += 1
                    if game.check_collision():
                        game.current_piece.x -= 1
                    last_move_time = current_time
            
            # 处理旋转
            if keys[pygame.K_UP]:
                if current_time - last_move_time > 150:  # 旋转间隔
                    game.current_piece.rotate()
                    if game.check_collision():
                        for _ in range(3):
                            game.current_piece.rotate()
                    last_move_time = current_time
            
            # 处理快速下落
            if keys[pygame.K_DOWN]:
                if current_time - last_move_time > fast_fall_speed:
                    game.move_down()
                    last_move_time = current_time
            else:
                # 正常下落
                game.fall_time += clock.get_rawtime()
                if game.fall_time >= game.fall_speed:
                    game.move_down()
                    game.fall_time = 0
        else:
            game.fall_time = 0  # 在暂停状态下重置下落时间

        # 绘制
        screen.fill(BLACK)
        draw_grid(screen, game.grid)
        draw_piece(screen, game.current_piece, 
                  game.current_piece.x * BLOCK_SIZE,
                  game.current_piece.y * BLOCK_SIZE)
        draw_next_piece(screen, game.next_piece)
        
        # 显示分数和等级
        score_text = FONT.render(f'分数: {game.score}', True, WHITE)
        level_text = FONT.render(f'等级: {game.level}', True, WHITE)
        screen.blit(score_text, (GRID_WIDTH * BLOCK_SIZE + 10, 10))
        screen.blit(level_text, (GRID_WIDTH * BLOCK_SIZE + 10, 50))
        
        if game.game_over:
            game_over_text = FONT.render('游戏结束!', True, RED)
            restart_text = FONT.render('按R重新开始', True, WHITE)
            screen.blit(game_over_text, (GRID_WIDTH * BLOCK_SIZE + 10, 200))
            screen.blit(restart_text, (GRID_WIDTH * BLOCK_SIZE + 10, 240))
        
        if game.paused:
            pause_text = FONT.render('游戏暂停', True, WHITE)
            screen.blit(pause_text, (GRID_WIDTH * BLOCK_SIZE + 10, 280))

        pygame.display.flip()
        clock.tick(60)  # 限制帧率为60FPS

    pygame.quit()

if __name__ == '__main__':
    main()