USE `Copa do Mundo de Futebol`;

DELIMITER $$

-- Trigger para validar camisa no INSERT
DROP TRIGGER IF EXISTS trg_verificar_camisa_insert$$
CREATE TRIGGER trg_verificar_camisa_insert
BEFORE INSERT ON `Copa do Mundo de Futebol`.`jogadores`
FOR EACH ROW
BEGIN
    IF EXISTS (
        SELECT 1 FROM `Copa do Mundo de Futebol`.`jogadores` 
        WHERE id_selecao = NEW.id_selecao AND numero_camisa = NEW.numero_camisa
    ) THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Esta camisa já está em uso nesta seleção.';
    END IF;
END$$

-- Trigger para validar camisa no UPDATE
DROP TRIGGER IF EXISTS trg_verificar_camisa_update$$
CREATE TRIGGER trg_verificar_camisa_update
BEFORE UPDATE ON `Copa do Mundo de Futebol`.`jogadores`
FOR EACH ROW
BEGIN
    -- Só verifica se o usuário estiver mudando o número da camisa ou mudando o jogador de seleção
    IF NEW.numero_camisa != OLD.numero_camisa OR NEW.id_selecao != OLD.id_selecao THEN
        IF EXISTS (
            SELECT 1 FROM `Copa do Mundo de Futebol`.`jogadores` 
            WHERE id_selecao = NEW.id_selecao AND numero_camisa = NEW.numero_camisa
        ) THEN
            SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Esta camisa já está em uso nesta seleção.';
        END IF;
    END IF;
END$$

DELIMITER ;
