USE [Notes]
GO

/****** Object: Table [dbo].[Users] Script Date: 31.12.2023 16:17:32 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Users] (
    [Id]                INT            IDENTITY (1, 1) NOT NULL,
    [Name]              NVARCHAR (MAX) NOT NULL,
    [Password]          NVARCHAR (MAX) NOT NULL,
    [Email]             NVARCHAR (MAX) NOT NULL,
    [VerificationToken] NVARCHAR (MAX) NULL,
    [VerificatedAt]     DATETIME       NULL,
    [ResetToken]        NVARCHAR (MAX) NULL,
    [ResetTokenExpires] DATETIME       NULL,
    [ResetConfirmed]    BIT            NULL
);


